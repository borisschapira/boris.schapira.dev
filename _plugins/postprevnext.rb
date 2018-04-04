# https://www.scandio.de/blog/en/2017/11/jekyll-performance
module Jekyll
  class PostNext < Generator
    safe true
    priority :high

    def generate(site)
      all_posts = site.posts.docs

      locales = %w[fr_FR en_US]
      categories = %w[web citoyen papa]
      locales.each do |locale|
        categories.each do |category|
          locale_posts = all_posts.select { |post| post.data['locale'] == locale }
          locale_cat_posts = locale_posts.select { |post| post.data['category'] == category }
          locale_cat_posts.each_with_index do |post, index|
            post.data['next_context'] = if index == 0
                                          nil
                                        else
                                          {
                                            'title' => locale_cat_posts[index - 1].data['title'], 
                                            'url' => locale_cat_posts[index - 1].data['url']
                                          }
                                        end

            post.data['prev_context'] = if index == locale_cat_posts.size - 1
                                          nil
                                        else
                                          {
                                            'title' => locale_cat_posts[index + 1].data['title'], 
                                            'url' => locale_cat_posts[index + 1].data['url']
                                          }
                                        end
          end
        end
      end
    end
  end
end
