class CreateImgLists < ActiveRecord::Migration[6.1]
  def change
    create_table :img_lists do |t|
      t.string :imgUrl
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
