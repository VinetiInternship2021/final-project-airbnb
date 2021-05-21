class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rate, :property_id, :user_id
  has_one :property
end
