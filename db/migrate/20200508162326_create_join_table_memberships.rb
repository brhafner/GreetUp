class CreateJoinTableMemberships < ActiveRecord::Migration[5.2]
  def change
    create_join_table :groups, :users, table_name: :memberships do |t|
      t.integer :user_id, null: false
      t.integer :group_id, null: false
    end
    add_index :memberships, [:group_id, :user_id], unique: true
    add_index :memberships, :user_id
  end
end
