class Order < ApplicationRecord
  belongs_to :user
  belongs_to :property
end


# Order.create!(host_id: 1, guest_id: 19, property_id: User.first.property.last.id)
# host -> User.find_by(id: id).order
# guset -> Order.find_by(guest_id: id)
