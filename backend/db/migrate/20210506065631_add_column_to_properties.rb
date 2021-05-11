class AddColumnToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :latitude, :string
    add_column :properties, :longitude, :string
  end
end
