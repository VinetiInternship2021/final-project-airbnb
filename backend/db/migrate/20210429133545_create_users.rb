class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.boolean :isActive
      t.string :role
      t.string :password_digest

      t.timestamps
    end
  end
end
