require 'csv'

class Review < ApplicationRecord
  validates :rate, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
  validates :title, presence: true, length: { minimum: 8, maximum: 128 }
  validates :description, presence: true, length: { minimum: 8, maximum: 1024 }
  validates :property_id, presence: true
  # validates :user_id, presence: true, numericality: {only_integer: true, other_than: Property.find_by_id(@property_id).user_id } # Property.find_by_id(@property_id).user_id}

  # puts "helloooooooo #{@property_id.eql? 12} and #{:user_id}" 
  # puts self.property_id
  # , less_than: 20
  # a = :user_is_not_the_owner
  # puts "helllllllooooooooo #{self.user_id.equal? Property.find_by_id(self.property_id).user_id}"

  # def user_is_not_the_owner
  #   user_id.equal? Property.find_by_id(self.property_id).user_id
  # end
  
  belongs_to :property

  @reviewsFilePath = 'app/CSVs/reviews.csv'

  private
  def self.import_record
      puts '::::::::::::::::::::::::::inserting reviews::::::::::::::::::::::::::'
      reviews = array_of_reviews
      Property.all.each do |property|
        property.reviews.create!(reviews)
      end
      puts '::::::::::::::::::::::::::::::inserted::::::::::::::::::::::::::'
  end

  private
  def self.array_of_reviews
      reviewsRecords = []
      CSV.read(@reviewsFilePath).each do |record|
      reviewsRecords << extract_(record)
      end
      reviewsRecords
  end

  private
  def self.extract_(record)
      {
          title: record[0],
          description: record[1],
          rate: rand(2..5),
          user_id: rand(1..20),
          created_at: Time.current,
          updated_at: Time.current
      }
  end

  if Property.all.count <= 12
    self.import_record()
  end
end
