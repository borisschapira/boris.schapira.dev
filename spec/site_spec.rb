require_relative 'spec_helper'
require 'yaml'

describe "Content" do

  before(:each) do
    @posts = []
    Dir.glob('_posts/**/*.{md,markdown}').each do |p|
        @posts << p
    end
  end

  it "should have a valid Front-Matter YAML definition" do
    @posts.each do |post|
      begin
        YAML.load_file(post)
#      rescue Psych::SyntaxError => e
      rescue Exception => e  
        puts post
        puts e.message  
#        puts e.backtrace.inspect  
        raise "Post syntax is not valid"
      end
    end
  end
  
#  it "should use valid, resolvable links" do
#    spider_results = `wget -r --spider -l inf -p http://#{TEST_DOMAIN} 2>&1`
#    status = $?.exitstatus
#    
#    errors = spider_results.scan(/(http:\/\/.*)\n.*\nHTTP request sent, awaiting response\.\.\. (?!200 OK)(.*)\n/).map { |result| result.join(" fails with ") }
#    # the first error will always be robots.txt - remove it w 'arr[slice]', extra '[* ]' ensures we don't get nil back
#    
#    [*errors[1..-1]].should == []
#    $?.should == 0
#  end
end