class CreateApartments < ActiveRecord::Migration[6.1]
  def change
    create_table :apartments do |t|
      t.string :name
      t.string :apartmentType
      t.string :address
      t.string :price
      t.string :beds
      t.string :rooms
      t.string :guests
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
