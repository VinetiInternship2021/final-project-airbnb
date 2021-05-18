# frozen_string_literal: true
require 'csv'

class Property < ApplicationRecord
    validates :title, presence: true, length: { minimum: 8, maximum: 128 }
    validates :propType, presence: true, inclusion: { in: %w[room apartment] }
    validates :address, presence: true, length: { minimum: 8, maximum: 128 }
    validates :price, presence: true, numericality: { in: 1..3000 }
    validates :currency, presence: true, inclusion: { in: %w[USD] }
    validates :beds, presence: true, numericality: { in: 1..10 }
    validates :rooms, presence: true, numericality: { in: 1..10 }
    validates :guests, presence: true, numericality: { in: 1..10 }
    validates :description, presence: true, length: { minimum: 8 }

    belongs_to :user
    has_many :order
    has_many :img_lists
    has_many :reviews

    def avg_rating
      reviews.average(:rate).round(2).to_f
    end

    @propertiesFilePath = 'app/CSVs/properties.csv'

    private
    def self.import_record
        puts '::::::::::::::::::::::::::inserting properties::::::::::::::::::::::::::'
        properties = array_of_properties
        Property.create(properties)
        puts '::::::::::::::::::::::::::::::inserted::::::::::::::::::::::::::'
    end

    private
    def self.array_of_properties
        propertiesRecords = []
        CSV.read(@propertiesFilePath).each do |record|
        propertiesRecords << extract_(record)
        end
        propertiesRecords
    end

    private
    def self.extract_(record)
        {
            title: record[0],
            description: record[1],
            propType: record[2],
            price: record[3],
            user_id: User.find_by(email: record[4]).id,
            address: 'Bali, Indonesia',
            beds: 1,
            rooms: 2,
            guests: 2,
            currency: 'USD',
            created_at: Time.current,
            updated_at: Time.current
        }
    end

    if Property.all.count < 12
        self.import_record()
    end

end
