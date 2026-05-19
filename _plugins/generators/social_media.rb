require 'liquid/utils'
require_relative '../filters/i18n/string_filter.rb'
require_relative '../filters/i18n/date_filter.rb'

module Jekyll
  class SocialMedia < Generator
    safe true
    priority :high

    def generate(site)
      site.pages.each do |page|
        page.data['social'] = social(page, site)
      end

      site.posts.docs.each do |post|
        post.data['social'] = social(post, site)
      end
    end

    def strip_html(input)
      empty = ''.freeze
      input.to_s
           .gsub(/<script.*?<\/script>/m, empty)
           .gsub(/<!--.*?-->/m, empty)
           .gsub(/<style.*?<\/style>/m, empty)
           .gsub(/<.*?>/m, empty)
           .gsub(/\n/m, empty)
           .squeeze(' ')
           .strip
    end

    def truncatewords(input, words = 15, truncate_string = '...'.freeze)
      return if input.nil?

      wordlist = input.to_s.split
      words    = Liquid::Utils.to_integer(words)
      l        = [words - 1, 0].max
      wordlist.length > l ? wordlist[0..l].join(' '.freeze) + truncate_string.to_s : input
    end

    def mastodon_account(site, title_fragment)
      accounts = site.config.dig('author', 'social') || []
      accounts.find { |s| s['name'] == 'mastodon' && s['title'].include?(title_fragment) }
    end

    def cloudinary_standard_image(cloud_name, color, font_size, imgtitle, social_nick, social_left, logo, image)
      base = "https://res.cloudinary.com/#{cloud_name}/image/fetch"
      transforms = [
        "e_blur:200,c_crop,ar_1200:600,b_white",
        "e_grayscale",
        "w_1200",
        "b_rgb:#{color},o_20",
        "w_1000,c_fit,l_text:PT%20Sans_#{font_size}:#{imgtitle},x_2,y_-68,co_black,o_80",
        "w_1000,c_fit,l_text:PT%20Sans_#{font_size}:#{imgtitle},y_-70,co_white",
        "l_text:PT%20Sans_50:#{social_nick},g_south_east,x_#{social_left},y_65,co_black,o_20",
        "l_text:PT%20Sans_50:#{social_nick},g_south_east,x_#{social_left + 2},y_67,co_white",
        "c_fill,g_south_east,r_max,h_45,l_masto,w_45,x_750,y_60",
        "c_scale,g_south_west,l_#{logo},w_150,x_60,y_40",
        image
      ]
      "#{base}/#{transforms.join('/')}"
    end

    def cloudinary_thumbnail_image(cloud_name, social_nick, social_left, logo, thumbnail)
      base = "https://res.cloudinary.com/#{cloud_name}/image/fetch"
      transforms = [
        "c_crop,ar_1200:600,b_white",
        "w_1200",
        "l_text:PT%20Sans_50:#{social_nick},g_south_east,x_#{social_left},y_65,co_black,o_20",
        "l_text:PT%20Sans_50:#{social_nick},g_south_east,x_#{social_left + 2},y_67,co_black",
        "c_fill,g_south_east,r_max,h_45,l_masto,w_45,x_750,y_60",
        "c_scale,g_south_west,l_#{logo},w_150,x_60,y_40",
        thumbnail
      ]
      "#{base}/#{transforms.join('/')}"
    end

    def social(page, site)
      config             = site.config
      markdown_converter = site.find_converter_instance(::Jekyll::Converters::Markdown)

      title       = config['title']
      description = config['description']
      logo        = config.dig('cloudinary', 'logo')
      image       = config.dig('author', 'avatar')
      category    = nil

      if page.data.key?('title')
        title = page.data['title']
        title = "#{title}, #{page.data['subtitle']}" if page.data.key?('subtitle')
      end

      description = if page.data.key?('description')
                      page.data['description']
                    elsif page.data.key?('excerpt')
                      page.data['excerpt'].content
                    elsif page.content.size < 1000 && page.content.include?('<figure>')
                      page.content.split(/<figure>/).first
                    else
                      page.content
                    end

      description = description.gsub(/\r?\n/, ' ')
      description = markdown_converter.convert(truncatewords(description, 40))

      p        = URI::Parser.new
      imgtitle = p.escape(title)
                  .gsub(' ', '%20')
                  .gsub('.', '%2e')
                  .gsub(',%20', '%0A')
                  .gsub("'", '%E2%80%99')
                  .gsub('?', '%3F')
                  .gsub('%2C%20', '%0A')

      if page.data.key?('thumbnail_background')
        category = page.data['category']
        image    = config['url'] + page.data['thumbnail_background']
      elsif page.data.key?('category')
        category = page.data['category']
        image    = "#{config['url']}/assets/images/category/#{category}.jpg"
      elsif page.data.key?('pagination')
        category = page.data.dig('pagination', 'category')
        image    = "#{config['url']}/assets/images/category/#{category}.jpg" unless category.nil?
      end

      color = category.nil? ? site.data.dig('styles', 'main', 'color') : site.data.dig('styles', category, 'color')
      logo  = page.data['cloudinary_logo'] if page.data.key?('cloudinary_logo')

      font_size = [Integer(-0.86 * title.size + 135), 12].max

      is_pro_post = page.data['layout'] == 'post' && page.data['category']&.include?('web')
      account     = mastodon_account(site, is_pro_post ? 'pro' : 'perso')
      social_nick = account&.fetch('nick', '')                   || ''
      social_left = account&.fetch('cloudinary_x_offset', 64)   || 64

      cloud_name = config.dig('cloudinary', 'cloud_name')

      image = if page.data.key?('thumbnail_image')
                cloudinary_thumbnail_image(cloud_name, social_nick, social_left, logo, page.data['thumbnail_image'])
              else
                cloudinary_standard_image(cloud_name, color, font_size, imgtitle, social_nick, social_left, logo, image)
              end

      title = "#{strip_html(title)} &middot; #{config['title']}"
      title.gsub!('"', '&quot;')

      {
        'title'       => title,
        'description' => strip_html(description),
        'image'       => image,
        'color'       => color
      }
    end
  end
end
