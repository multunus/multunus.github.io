---
title: HTML Fixtures with Jasmine and JSTestdriver
date: '2011-03-14 15:03:07'
tags:
- cap-leena
- technology
wp:post_id: '4179'
link: http://www.multunus.com/blog/2011/03/html-fixtures-with-jasmine-and-jstestdriver/
---

Unit Testing Javascript is great using JSTestDriver and Jasmine, but maintaining HTML fixtures for the same is a pain. One of the approaches for fixing the same issue is by creating the HTML from the controller specs and loading the HTML using AJAX. This approach is mentioned [here](http://pivotallabs.com/users/jb/blog/articles/1152).

But I could not make it work with JSTestDriver as the server was not able to find the path for HTML fixtures. So I modified the above approach.

**Update:** I’ve created a gem using which you can achieve the same. Click [here](https://github.com/multunus/js_fixtures) for the same.


## Generate the fixtures
Create a file fixture_generator.rb and save it in spec/support directory. The contents of the file is as follows:

```
RSpec::Rails::ControllerExampleGroup.class_eval do
  # Saves the markup to a fixture file using the given name
  def save_fixture(markup, name)
    fixture_path = File.join(Rails.root.to_s, 'spec/javascripts/helpers')
    Dir.mkdir(fixture_path) unless File.exists?(fixture_path)

    fixture_file = File.join(fixture_path, &quot;#{name}.js&quot;)

    fixture_function = 'function load#{name}Fixture(){
  /* :DOC +='+markup+'* /
    }'
    File.open(fixture_file, 'w') do |file|
      file.puts(fixture_function)
    end
  end

  # From the controller spec response body, extracts html identified
  # by the css selector.
  def html_for(selector)
    doc = Nokogiri::HTML(response.body)

    #remove_third_party_scripts(doc)
    content = doc.css(selector).first.to_s

    convert_body_tag_to_div(content)
  end

  # Recommended that you add all body-level third party scripts inside a div called #third-party-scripts
  # so that they can be removed during testing.
  def remove_third_party_scripts(doc)
    scripts = doc.at('#third-party-scripts')
    scripts.remove if scripts
  end

  # Here we convert the body tag to a div so that we can load it into
  # the document running js specs without embedding a  within a body.
  def convert_body_tag_to_div(markup)
    markup.gsub('<body', '<div').gsub('</body>', '</div>')
  end
end
```

Call the save_fixture within the controller spec as follows:

```
describe 'Sign up' do
  it "should show the signup form" do
  get :new
  response.should render_template('new')
  save_fixture(html_for('body'), 'Signup')
  end
end
```

The above will create a file Signup.js in the path spec/javascripts/helpers

## Load the fixtures in JS tests
For this the spec/javascripts/helpers should be added to the load path for JSTD in jsTestDriver.conf.
Then call the method within the test.

```
describe('Validate registration form', function () {
  beforeEach(function () {
    $(this).ready(function () {
      loadSignupFixture()
    });
  });

  it('should validate the form ', function () {
      form = $('#user-registration-form')
      bindValidationForRegistrationForm()
      form.submit()
      expect($('.status').first().text()).toMatch('Please enter your name')
  });
});
```

Thats all. In this way it is assured that the HTML is consistent with the actual view. The only thing that needs to be taken care is to make sure that the controller spec should be run whenever there is a change in the DOM, so that it is available to JS unit tests.