class Property < ApplicationRecord
    validates :title, presence: true, length: { minimum: 8, maximum: 256 }
    validates :propType, presence: true, inclusion: { in: %w(room apartment) }
    validates :address, presence: true, length: { minimum: 8, maximum: 128 }
    validates :price, presence: true, numericality: { in: 1..3000 }
    validates :currency, presence: true, inclusion: { in: %w(AMD USD RUB) }
    validates :beds, presence: true, numericality: { in: 1..128 }
    validates :rooms, presence: true, numericality: { in: 1..128 }
    validates :guests, presence: true, numericality: { in: 1..256 }
    validates :description, presence: true, length: { minimum: 8, maximum: 256 }

    belongs_to :user
end

# messages for errors
# User.first.property.create!(title: 'wonderful place', propType: 'room',address: 'Yerevan, Armenia', price: '500',  currency: 'USD', beds: 2, rooms: 3, guests: 4, description: 'The best place to stay in Yerevan, blah blah blah')
