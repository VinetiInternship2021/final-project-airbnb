class ChangeSeveralTypesInProperty < ActiveRecord::Migration[6.1]
    def change
        change_column :properties, :beds, :integer
        change_column :properties, :rooms, :integer
        change_column :properties, :guests, :integer
        change_column :properties, :price, :integer
        add_column :properties, :currency, :string
    end
end
