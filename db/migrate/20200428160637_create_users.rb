class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name
      t.string :email, null: false
      t.string :phone_number
      t.integer :home_city_id
      t.string :photo_url	
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :home_city_id
  end
end
