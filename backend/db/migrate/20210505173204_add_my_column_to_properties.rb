class AddMyColumnToProperties < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :lattitude, :string
    add_column :properties, :longtitude, :string
  end
end
