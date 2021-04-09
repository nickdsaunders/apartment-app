class AddColumnToApartment < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :img, :string
    add_column :apartments, :title, :string
  end
end
