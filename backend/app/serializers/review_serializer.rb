class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :score, :user
  has_one :property
end
