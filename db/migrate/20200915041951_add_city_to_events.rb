class AddCityToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :address_2, :string
    add_column :events, :city, :string
    add_column :events, :state, :string
    add_column :events, :zip, :string
  end
end
