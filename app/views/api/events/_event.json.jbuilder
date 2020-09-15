json.extract! event, :id, :name, :details, :day, :start_time, :duration, :digital, :address, :address_2, :city, :state, :zip, :group_id
json.photo_url url_for(event.photo)
json.host event.host, :first_name, :id
json.attendees event.attendees, :first_name, :id