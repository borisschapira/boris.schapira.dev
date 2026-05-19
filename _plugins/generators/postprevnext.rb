module Jekyll
  class PostNext < Generator
    safe true
    priority :high

    def generate(site)
      all_posts  = site.posts.docs
      locales    = site.config['locales']         || %w[fr en]
      categories = site.config['post_categories'] || %w[web citoyen papa]

      locales.each do |locale|
        locale_posts = all_posts.select { |post| post.data['locale'] == locale }

        categories.each do |category|
          locale_cat_posts = locale_posts.select { |post| post.data['category'] == category }

          locale_cat_posts.each_with_index do |post, index|
            post.data['next_context'] = if index == 0
                                          nil
                                        else
                                          prev_post = locale_cat_posts[index - 1]
                                          {
                                            'title' => prev_post.data['title']&.gsub('"', '&quot;'),
                                            'url'   => prev_post.url
                                          }
                                        end

            post.data['prev_context'] = if index == locale_cat_posts.size - 1
                                          nil
                                        else
                                          next_post = locale_cat_posts[index + 1]
                                          {
                                            'title' => next_post.data['title']&.gsub('"', '&quot;'),
                                            'url'   => next_post.url
                                          }
                                        end
          end
        end
      end
    end
  end
end
