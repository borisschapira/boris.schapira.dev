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
      rescue Exception => e  
        puts post
        puts e.message  
        raise "Post syntax is not valid"
      end
    end
  end
end