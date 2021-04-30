class User < ApplicationRecord
    has_many :property
    has_secure_password
end
