# frozen_string_literal: true
require 'csv'

class User < ApplicationRecord
    validates :email, presence: true,
                        format: { with: /\A(.+)@(.+)\z/ },
                        uniqueness: { case_sensitive: true },
                        length: { minimum: 4, maximum: 254 }

    validates :firstName, presence: true, length: { minimum: 2, maximum: 25} 
    validates :lastName,  presence: true, length: { minimum: 2, maximum: 25 }
    validates :role,  presence: true, inclusion: { in: %w[host reg], message: "Role should be two types ` host or reg"}

    has_many :property
    has_many :order
    has_secure_password

    @hostUsersFilePath = 'app/CSVs/host_users.csv'
    @regUsersFilePath = 'app/CSVs/regular_users.csv'

    private
    def self.import_record
        puts '::::::::::::::::::::::::::inserting users::::::::::::::::::::::::::'
        users = array_of_regulars + array_of_hosts
        User.create(users)
        puts '::::::::::::::::::::::::::::::inserted::::::::::::::::::::::::::'
    end

    private
    def self.array_of_hosts
        hostRecords = []
        CSV.read(@hostUsersFilePath).each do |record|
        hostRecords << extract_(record)
        end
        hostRecords
    end

    private
    def self.array_of_regulars
        regularRecords = []
        CSV.read(@regUsersFilePath).each do |record|
        regularRecords << extract_(record)
        end
        regularRecords
    end

    private
    def self.extract_(record)
        {
            firstName: record[0],
            lastName: record[1],
            email: record[2],
            role: record[3],
            password: 'hPea8WSq23ByasNZ',
            created_at: Time.current,
            updated_at: Time.current
        }
    end

    if User.all.count < 25
        self.import_record()
    end
end
