require 'liquid/utils'
require_relative '../filters/i18n/string_filter.rb'
require_relative '../filters/i18n/date_filter.rb'

module Jekyll
  class SocialMedia < Generator
    safe true
    priority :high

    @@configuration = nil

    def get_configuration
      if @@configuration.nil?
        @@configuration = Jekyll.configuration({})
      end
      @@configuration
    end

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
      input.to_s.gsub(/<script.*?<\/script>/m, empty).gsub(/<!--.*?-->/m, empty).gsub(/<style.*?<\/style>/m, empty).gsub(/<.*?>/m, empty).gsub(/\n/m, empty)
    end

    def truncatewords(input, words = 15, truncate_string = "...".freeze)
      return if input.nil?
      wordlist = input.to_s.split
      words = Liquid::Utils.to_integer(words)
      l = words - 1
      l = 0 if l < 0
      wordlist.length > l ? wordlist[0..l].join(" ".freeze) + truncate_string.to_s : input
    end

    def social(page, site)
      markdown_converter = site.find_converter_instance(::Jekyll::Converters::Markdown)

      title = get_configuration['title']
      description = get_configuration['description']
      logo = get_configuration['cloudinary']['logo']
      image = site.config["author"]["avatar"]
      color = site.data["styles"]["main"]["color"]

      if page.data.key?("title")
        title = page.data["title"]
        if page.data.key?("subtitle")
          title = title + ' – ' + page.data["subtitle"]
        end
      end

      if page.data.key?("description")
        description = page.data["description"]
      else
        description = page.content

        if page.data.key?("excerpt")
          description = page.data["excerpt"].content
        elsif page.content.size < 1000
          if page.content.include? "<figure>"
            description = page.content.split(/<figure>/).first
          end
        end
      end
      description = description.gsub(/\r?\n/, ' ');
      description = markdown_converter.convert(truncatewords(description, 40));

      p = URI::Parser.new
      imgtitle = p.escape(title).gsub(" ", '%20').gsub(".", '%2e').gsub(",%20", '%0A').gsub("'",'%E2%80%99').gsub('?', '%3F').gsub('%2C%20','%0A')

      if page.data.key?("thumbnail_background")
        category = page.data["category"]
        image = get_configuration['url'] + page.data["thumbnail_background"]
      elsif page.data.key?("category")
        category = page.data["category"]
        image = get_configuration['url'] + '/assets/images/category/' + category + '.jpg'
      elsif page.data.key?("pagination")
        category = page.data["pagination"]["category"]
        unless category.nil?
          image = get_configuration['url'] + '/assets/images/category/' + category + '.jpg'
        end
      end
      unless category.nil?
        color = site.data["styles"][category]["color"]
      else
        color = site.data["styles"]["main"]["color"]
      end

      if page.data.key?("cloudinary_logo")
        logo = page.data["cloudinary_logo"]
      end

      font_size = Integer(-0.86 * title.size + 135)

      social_nick = '@borisschapira@framapiaf.org'
      social_left = 64
      if page.data["layout"] == 'post' and page.data["category"].include? 'web'
        social_nick = '@boostmarks@hachyderm.io'
        social_left = 98
      end

      image = 'https://res.cloudinary.com/' + get_configuration['cloudinary']['cloud_name'] + '/image/fetch/e_blur:200,c_crop,ar_1200:600,b_white/e_grayscale/w_1200/b_rgb:' + color + ',o_20/w_1000,c_fit,l_text:PT%20Sans_' + font_size.to_s + ':' + imgtitle + ',x_2,y_-68,co_black,o_80/w_1000,c_fit,l_text:PT%20Sans_' + font_size.to_s + ':' + imgtitle + ',y_-70,co_white/l_text:PT%20Sans_50:' + social_nick + ',g_south_east,x_' + social_left.to_s + ',y_65,co_black,o_20/l_text:PT%20Sans_50:' + social_nick + ',g_south_east,x_' + (social_left + 2).to_s + ',y_67,co_white/c_fill,g_south_east,r_max,h_45,l_masto,w_45,x_750,y_60/c_scale,g_south_west,l_'+ logo +',w_150,x_60,y_40/' + image

      if page.data.key?("thumbnail_image")
        image = 'https://res.cloudinary.com/' + get_configuration['cloudinary']['cloud_name'] + '/image/fetch/c_crop,ar_1200:600,b_white/w_1200/l_text:PT%20Sans_50:' + social_nick + ',g_south_east,x_' + social_left.to_s + ',y_65,co_black,o_20/l_text:PT%20Sans_50:' + social_nick + ',g_south_east,x_' + (social_left + 2).to_s + ',y_67,co_black/c_fill,g_south_east,r_max,h_45,l_masto,w_45,x_750,y_60/c_scale,g_south_west,l_'+ logo +',w_150,x_60,y_40/' + page.data["thumbnail_image"]
      end

      title = strip_html(title) + " &middot; " + get_configuration['title']
      title.gsub! '"', '&quot;'

      result = {
        'title' => title,
        'description' => strip_html(description),
        'image' => image,
        'color' => color
      }

      result
    end
  end
end
