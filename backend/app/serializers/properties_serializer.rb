class PropertiesSerializer < ActiveModel::Serializer
  attributes :id :firstName
  has_many :img_lists
end
