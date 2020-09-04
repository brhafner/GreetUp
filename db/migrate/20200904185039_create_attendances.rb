class CreateAttendances < ActiveRecord::Migration[5.2]
  def change
    create_table :attendances do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
    end
    add_index :attendances, [:event_id, :user_id], unique: true
    add_index :attendances, :user_id
  end
end
