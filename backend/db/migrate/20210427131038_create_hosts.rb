class CreateHosts < ActiveRecord::Migration[6.1]
  def change
    create_table :hosts do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
