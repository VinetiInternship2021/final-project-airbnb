class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :title
      t.string :propType
      t.string :address
      t.string :price
      t.string :beds
      t.string :rooms
      t.string :guests
      t.text :description
      t.references :user, null: false, foreign_key: true
      # t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
