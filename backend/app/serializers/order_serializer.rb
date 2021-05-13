class OrderSerializer < ActiveModel::Serializer
  attributes :id, :priceNight, :totalAmount, :start_date, :end_date
  has_one :user
  belongs_to :property
end
