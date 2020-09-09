json.extract! group, :id, :title, :about, :organizer_id, :city_id, :category
json.photo_url url_for(group.photo)
json.organizer group.organizer, :first_name
json.members group.members, :first_name, :id
json.events group.events, :id, :name, :details, :day, :start_time
