class Order < ApplicationRecord
    belongs_to :property
    has_and_belongs_to_many :user
end

# Order.create!(host_id: 1, guest_id: 19, property_id: User.first.property.last.id)
# host -> User.find_by(id: id).order
# guset -> Order.find_by(guest_id: id)