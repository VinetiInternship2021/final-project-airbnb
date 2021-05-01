class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.references :property, null: false, foreign_key: true
      t.references :host, null: false, index: true, foreign_key: { to_table: :users }
      t.references :guest, null: false, index: true, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
