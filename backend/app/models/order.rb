class Order < ApplicationRecord
  belongs_to :property
  has_many :user
end

# Order.create!(host_id: 1, guest_id: 19, property_id: User.first.property.last.id)
