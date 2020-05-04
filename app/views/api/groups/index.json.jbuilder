# json.array! @groups, partial: 'model/model', as: :model

@groups.each do |group|
  json.set! group.id do
    json.id group.id
    json.title group.title
    json.about group.about
    json.organizer_id group.organizer_id
    json.city_id group.city_id
    json.category group.category
  end
end


# { "1":{ 
#         "id":1,
#         "title":"demoTitle",
#         "about":"demoBody",
#         "organizerId":2,
#         "cityId":3
#       },
#   "2":{
#         "id":2,
#         "title":"another demoTitle",
#         "about":"another demoBody",
#         "organizerId":1,
#         "cityId":33
#       }
# }