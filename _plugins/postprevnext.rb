# https://www.scandio.de/blog/en/2017/11/jekyll-performance
module Jekyll
  class PostNext < Generator

    safe true
    priority :high

    def generate(site)

      all_posts = site.posts.docs

      locales = ['fr_FR', 'en_US']
      categories = ['web', 'citoyen', 'papa']
      locales.each do |locale|
        categories.each do |category|

          locale_posts = all_posts.select {|post| post.data['locale'] == locale}
          locale_cat_posts = locale_posts.select {|post| post.data['category'] == category}
          locale_cat_posts.each_with_index do |post, index|

            if index == 0
              post.data['next_context'] = nil
            else
              post.data['next_context'] = locale_cat_posts[index - 1]
            end

            if index == locale_cat_posts.size - 1
              post.data['prev_context'] = nil
            else
              post.data['prev_context'] = locale_cat_posts[index + 1]
            end
          end
        end
      end

    end

  end
end