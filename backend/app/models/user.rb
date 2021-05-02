class User < ApplicationRecord
    has_many :property
    has_many :order, :through => :property
    has_secure_password
end
