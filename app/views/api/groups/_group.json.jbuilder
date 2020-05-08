json.extract! group, :id, :title, :about, :organizer_id, :city_id, :category 
json.photo_url url_for(group.photo)
json.organizer group.organizer, :first_name
