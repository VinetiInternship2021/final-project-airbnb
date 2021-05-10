class SetDefaultActiveValueToUser < ActiveRecord::Migration[6.1]
  def change
    change_column_default(:users, :isActive, true)
  end
end
