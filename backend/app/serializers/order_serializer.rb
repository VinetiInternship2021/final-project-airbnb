class OrderSerializer < ActiveModel::Serializer
  attributes :id, :priceNight, :totalAmount, :started_date, :end_date
  has_one :user
  has_one :property
end
