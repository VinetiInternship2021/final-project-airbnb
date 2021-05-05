class Property < ApplicationRecord
  belongs_to :user
  has_many :img_lists
end
