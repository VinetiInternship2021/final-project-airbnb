# frozen_string_literal: true

class User < ApplicationRecord
  # validates :email, presence: true,  format: { with: /\A(.+)@(.+)\z/ },
  #                    uniqueness: { case_sensitive: true },
  #                    length: { minimum: 4, maximum: 254 }
  # validates :email, presence: true, uniqueness: { case_sensitive: true} message: {''} 

  validates :email, presence: true, uniqueness: true
  validates :firstName, presence: true, length: { minimum: 2, maximum: 25} 
  validates :lastName, presence: true, length: { minimum: 2, maximum: 25 }
  validates :role, presence: true, inclusion: { in: %w[host reg], message: "You can register only host or reg users"  }


 


  has_many :property
  has_secure_password
end
