class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.references :property, null: false, foreign_key: true
      t.integer :priceNight
      t.integer :totalAmount
      t.date :started_date
      t.date :end_date

      t.timestamps
    end
  end
end
