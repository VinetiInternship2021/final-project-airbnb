class Property < ApplicationRecord
  belongs_to :user
  has_many :order
end
