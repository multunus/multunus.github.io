---
title: Optimizing for performance Pipelining
date: '2013-06-17 10:55:05'
tags:
- cap-tamillharasan
- cap-admin
- technology
wp:post_id: '4141'
link: http://www.multunus.com/blog/2013/06/optimizing-for-performance-a-hrefhttpredis-ioredisa-pipelining/
---

In everyday programming, it is a common tendency to overlook certain parts of the code which may not be implemented in the most efficient way. It is usually not a problem, but this could create a performance bottleneck as the data volume grows. When working with huge data, even the slightest overhead introduced in the code can prove to be too big a bottleneck in performance.

Having an unwanted line of code which cost 10 milliseconds when multiplied by a million records in DB can easily take 2.5+ hours extra.

We recently hit one similar problem in one of our project.

## Some Background Info
This project is backed by MongoDB with over 2 million records. We were using Redis to index the query combinations that can be applied to the data in Mongo. This was done to avoid hitting the MongoDB for all the intermediate steps before the final result.

Our implementation of indexing takes care of picking out the filter combinations which can result in at least one record at the end. This has to be done every time the MongoDB is updated with newer data.

## Problem
Indexing was taking ~4 hours to complete. This was after optimizing the logic used for indexing. After some close inspection, we found a bottleneck in Redis operation that can be optimized.

Consider the following code:

```
SurveyData.all.each_with_index do |survey_data, index|
     ….
     $redis.sadd(related_field_id, survey_data.field_id)
     ….
end
```

The Redis operation ‘sadd’ is fast, but since Redis is a TCP server the operation has to go through Request/Response cycle of TCP. With the use case mentioned above, the number of redis operations is in the range of millions. This puts us in a dreadful situation of going through the TCP cycle every time. On top of this network latency only adds to the worries. (This entire thing is called as Round Trip Time (RTT)).

Take an example RTT of 100 milliseconds. Even with the server capable of processing 10k operations/second, the maximum number of requests that can be processed will be 10/second.

If we can reduce the number of Request/Response cycle. We would greatly benefit from the efficiency of Redis operations. One of the possible solutions - [Redis Pipelining](http://redis.io/topics/pipelining)

In pipelining mode we send requests without waiting for the response from the server. This makes it possible for us to send more number of requests without any latency. While the requests are being processed, the corresponding responses are queued up in the server. This can be pulled from the server in one single step to the client.

This is called as pipelining and is not a new idea. It was around for long time. This technique can be used to avoid RTTs to a large extent.

Support for pipelining is available in almost all versions of Redis.

Let’s revisit the same code mentioned earlier, but this time with pipelining. The following is the version with redis pipelining.

```
$redis.pipelined do
    survery_data.each_with_index do |survey_data, index|
       ...
       $redis.sadd(related_field_id, survey_data.field_id)
       ...
    end
  end
```

The code is self-explanatory and only encloses the redis operations in pipeline block. The execution time then reduced to ~1 hr after this optimization. The recommended batch size for the pipeline is around 10k requests. We sliced the 2.8 million records into batches of 10k records.
