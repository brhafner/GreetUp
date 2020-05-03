class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :title, null: false
      t.text :about, null: false
      t.integer :organizer_id, null: false
      t.integer :city_id, null: false
      t.timestamps
    end
    add_index :groups, :organizer_id
    add_index :groups, :city_id
  end
end
