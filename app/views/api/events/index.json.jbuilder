@events.each do |event|
  json.set! event.id do
    json.id event.id
    json.name event.name
    json.details event.details
    json.day event.day
    json.start_time event.start_time
    json.duration event.duration
    json.digital event.digital
    json.address event.address
    json.host_id event.host_id
    # json.host_id event.host_id, :first_name   <= need to build association to call first name
    json.group_id event.group_id
    # json.photo_url url_for(event.photo)  <= put back once testing completed
  end
end