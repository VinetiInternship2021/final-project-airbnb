class Review < ApplicationRecord
  validates :rate, presence: true, numericality: {only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5}
  validates :title, presence: true, length: { minimum: 8, maximum: 128 }
  validates :description, presence: true, length: { minimum: 8, maximum: 1024 }

  belongs_to :property
end
