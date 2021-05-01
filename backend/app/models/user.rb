class User < ApplicationRecord
    validates :firstName, presence: true, length: { minimum: 2, maximum: 128 }
    validates :lastName, presence: true, length: { minimum: 2, maximum: 128 }
    validates :email, presence: true,
    format: { with: /\A(.+)@(.+)\z/, message: "Email invalid"  },
    uniqueness: { case_sensitive: true },
    length: { minimum: 4, maximum: 254 }
    validates :role, presence: true, inclusion: { in: %w(host regular) }
    
    has_many :property
    has_secure_password
end
