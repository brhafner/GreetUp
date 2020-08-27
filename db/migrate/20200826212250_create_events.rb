class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.text :details, null: false
      t.date :day, null: false
      t.datetime :start_time
      t.float :duration
      t.boolean :digital
      t.string :address
      t.integer :group_id, null: false
      t.integer :host_id, null: false
      t.timestamps
    end
    add_index :events, :group_id
    add_index :events, :host_id
  end
end
