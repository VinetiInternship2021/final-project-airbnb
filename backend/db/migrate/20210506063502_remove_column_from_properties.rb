class RemoveColumnFromProperties < ActiveRecord::Migration[6.1]
  def change
    remove_column :properties, :lattitude, :string
    remove_column :properties, :longtitude, :string
  end
end
