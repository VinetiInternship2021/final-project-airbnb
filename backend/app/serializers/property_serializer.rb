class PropertySerializer < ActiveModel::Serializer
  attributes :id, :title, :propType, :address, :price, :beds, :rooms, :guests, :description, :user_id
  has_many :img_lists
end
