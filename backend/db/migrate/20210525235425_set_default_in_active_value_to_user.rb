class SetDefaultInActiveValueToUser < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:users, :isActive, false)
  end
end
