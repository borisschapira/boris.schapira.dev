module Jekyll
  class PostNext < Generator
    safe true
    priority :high

    def generate(site)
      all_posts = site.posts.docs
      locales = %w[fr en]
      categories = %w[web citoyen papa]
      locales.each do |locale|
        categories.each do |category|
          locale_posts = all_posts.select { |post| post.data['locale'] == locale }
          locale_cat_posts = locale_posts.select { |post| post.data['category'] == category }
          locale_cat_posts.each_with_index do |post, index|
            if index == 0
              post.data['next_context'] = nil
            else
              post.data['next_context'] = {
                'title' => locale_cat_posts[index - 1].data['title'].gsub('"', '&quot;'),
                'url' => locale_cat_posts[index - 1].url
              }
            end

            if index == locale_cat_posts.size - 1
              post.data['prev_context'] = nil
            else
              post.data['prev_context'] = {
                'title' => locale_cat_posts[index + 1].data['title'].gsub('"', '&quot;'),
                'url' => locale_cat_posts[index + 1].url
              }
            end
          end
        end
      end
    end
  end
end
