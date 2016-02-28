namespace :postbuild do
  namespace :test do

    # Use: rake clean
    desc "Test source content and generated result"
    task :all => [:test_content, :test_generated]

    desc "desc1"
    task :test_content => :environment do
      sh 'rspec --format doc'
    end

    desc "desc2"
    task :test_generated => :environment do
      sh 'htmlproof ./_site  --disable-external --empty-alt-ignore true'
    end

  end
end
