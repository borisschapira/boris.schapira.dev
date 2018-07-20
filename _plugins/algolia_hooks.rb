# frozen_string_literal: true

module Jekyll
  module Algolia
    module Hooks
      def self.before_indexing_each(record, _node, _context)
        record[:translation] = nil
        record
      end
    end
  end
  end
