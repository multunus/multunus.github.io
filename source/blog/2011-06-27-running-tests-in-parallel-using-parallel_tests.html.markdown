---
title: Running tests in parallel using parallel_tests
date: '2011-06-27 10:48:01'
tags:
- cap-leena
- rails
- technology
link: http://www.multunus.com/blog/2011/06/running-tests-in-parallel-using-parallel_tests/
---

One of the action items I had mentioned in [an earlier post](http://www.multunus.com/2011/06/takeaways-from-ruby-conf-india-2011/), was to setup the  infrastructure for running tests in parallel.

I tried [TLB](http://test-load-balancer.github.com/), but stopped on it because it required cluster setup for our CI server i.e. hudson. I was looking for something which was even simpler than TLB, and tried [Hydra](https://github.com/ngauthier/hydra), but could not setup it successfully. Thankfully though, the Hydra committer  [suggested](https://github.com/ngauthier/hydra/issues/48) that I try out [parallel_tests](https://github.com/grosser/parallel_tests) - as hydra is not currently being maintained.

I am yet to try running it parallelly on multiple machines, but I tried it on a dual core machine and can clearly see the difference. The following are the results:

### Without parallel_tests

```
Finished in 451.01 seconds
1089 examples, 20 failures, 1 pending
real    8m14.908s
user    3m4.236s
sys 3m20.061s
```

### With parallel_tests

```
Results:
544 examples, 10 failures, 1 pending
545 examples, 10 failures
Took 330.528104223 seconds
Specs Failed
real    5m35.586s
user    7m3.150s
sys 0m14.269s
```

The different is 2-3 minutes which I think is a huge deal.

I [forked](https://github.com/leenasn/parallel_tests) parallel_tests to make a change to its default behaviour of running tests only under spec folder. As our app was built using rails engines, we had tests even under our vendor/engines directory.

The feature, I feel, missing in parallel_tests compared to TLB is the logic it uses to split the tests. TLB is intelligent enough to split the tests into different processes depending upon the time each test takes, so that all the threads finish by the same time. I am not sure whether how exactly parallel_tests works, but looks like it splits the total no of tests among the number of processes because when it started I could see the message:

```
"2 processes for 162 specs, 81 specs per process"
```

But parallel_tests by default spawns multiple processes depending upon the “core” i.e. on a dual core it starts 2 processes unless you mention otherwise.
