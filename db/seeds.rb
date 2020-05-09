# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Group.destroy_all


# create users
user1 = User.create(first_name: "Mitchell", last_name: "Grant", password: "password", email: "test1@test.com", phone_number: "555-555-5555", home_city_id: "1")
user2 = User.create(first_name: "Abigayle", last_name: "Halliday", password: "password", email: "test2@test.com", phone_number: "555-555-5555", home_city_id: "1")
user3 = User.create(first_name: "Anastazja", last_name: "Johnson", password: "password", email: "test3@test.com", phone_number: "555-555-5555", home_city_id: "1")
user4 = User.create(first_name: "Yasmeen", last_name: "Povey", password: "password", email: "test4@test.com", phone_number: "555-555-5555", home_city_id: "1")
user5 = User.create(first_name: "Alayna", last_name: "Nguyen", password: "password", email: "test5@test.com", phone_number: "555-555-5555", home_city_id: "1")
user6 = User.create(first_name: "Anaiya", last_name: "Fisher", password: "password", email: "test6@test.com", phone_number: "555-555-5555", home_city_id: "1")
user7 = User.create(first_name: "Maisha", last_name: "Singleton", password: "password", email: "test7@test.com", phone_number: "555-555-5555", home_city_id: "1")
user8 = User.create(first_name: "Elena", last_name: "Cole", password: "password", email: "test8@test.com", phone_number: "555-555-5555", home_city_id: "1")
user9 = User.create(first_name: "Jerome", last_name: "Gutierrez", password: "password", email: "test9@test.com", phone_number: "555-555-5555", home_city_id: "1")
user10 = User.create(first_name: "Thalia", last_name: "Rivers", password: "password", email: "test10@test.com", phone_number: "555-555-5555", home_city_id: "1")
user11 = User.create(first_name: "Hallie", last_name: "Buxton", password: "password", email: "test11@test.com", phone_number: "555-555-5555", home_city_id: "1")
user12 = User.create(first_name: "Kairon", last_name: "Adamson", password: "password", email: "test12@test.com", phone_number: "555-555-5555", home_city_id: "1")
user13 = User.create(first_name: "Adrienne", last_name: "last", password: "password", email: "test13@test.com", phone_number: "555-555-5555", home_city_id: "1")
user14 = User.create(first_name: "Tara", last_name: "English", password: "password", email: "test14@test.com", phone_number: "555-555-5555", home_city_id: "1")
user15 = User.create(first_name: "Gregor", last_name: "Cowan", password: "password", email: "test15@test.com", phone_number: "555-555-5555", home_city_id: "1")
user16 = User.create(first_name: "Roland", last_name: "Kinney", password: "password", email: "test16@test.com", phone_number: "555-555-5555", home_city_id: "1")
user17 = User.create(first_name: "Shanay", last_name: "Valenzuela", password: "password", email: "test17@test.com", phone_number: "555-555-5555", home_city_id: "1")
user18 = User.create(first_name: "Cooper", last_name: "Saunders", password: "password", email: "test18@test.com", phone_number: "555-555-5555", home_city_id: "1")
user19 = User.create(first_name: "Brent", last_name: "Denton", password: "password", email: "test19@test.com", phone_number: "555-555-5555", home_city_id: "1")
user20 = User.create(first_name: "Woodrow", last_name: "Whittle", password: "password", email: "test20@test.com", phone_number: "555-555-5555", home_city_id: "1")
user21 = User.create(first_name: "Meera", last_name: "Merrill", password: "password", email: "test21@test.com", phone_number: "555-555-5555", home_city_id: "1")
user22 = User.create(first_name: "Safa", last_name: "Ferrell", password: "password", email: "test22@test.com", phone_number: "555-555-5555", home_city_id: "1")
user23 = User.create(first_name: "Rahim", last_name: "Baker", password: "password", email: "test23@test.com", phone_number: "555-555-5555", home_city_id: "1")
user24 = User.create(first_name: "Velma", last_name: "Barclay", password: "password", email: "test24@test.com", phone_number: "555-555-5555", home_city_id: "1")
user25 = User.create(first_name: "Murtaza", last_name: "Greer", password: "password", email: "test25@test.com", phone_number: "555-555-5555", home_city_id: "1")
user26 = User.create(first_name: "Oisin", last_name: "Houghton", password: "password", email: "test26@test.com", phone_number: "555-555-5555", home_city_id: "1")
user27 = User.create(first_name: "Meg", last_name: "Lowry", password: "password", email: "test27@test.com", phone_number: "555-555-5555", home_city_id: "1")
user28 = User.create(first_name: "Claudia", last_name: "Whittaker", password: "password", email: "test28@test.com", phone_number: "555-555-5555", home_city_id: "1")
user29 = User.create(first_name: "Rajveer", last_name: "Lynch", password: "password", email: "test29@test.com", phone_number: "555-555-5555", home_city_id: "1")
user30 = User.create(first_name: "Kendal", last_name: "Sampson", password: "password", email: "test30@test.com", phone_number: "555-555-5555", home_city_id: "1")
user31 = User.create(first_name: "Alayna", last_name: "Dickerson", password: "password", email: "test31@test.com", phone_number: "555-555-5555", home_city_id: "1")
user32 = User.create(first_name: "Kaylum", last_name: "Underwood", password: "password", email: "test32@test.com", phone_number: "555-555-5555", home_city_id: "1")


category1 = "Outdoors &amp; Adventure"
category2 = "Pets"
category3 = "Learning"
category4 = "Movement"
category5 = "Food &amp; Drink"
category6 = "Sports &amp; Fitness"
category7 = "Photography"
category8 = "Language &amp; Culture"

# Outdoors
about1 =  "Let's get together to explore San Francisco's neighborhoods, stairways, peaks, and open spaces -- on foot. 
We'll feed our sense of adventure as well as our curiosity about the city's natural and social history."

about2 = "Welcome Adventurers!
US Hiking is the premier volunteer hiking organization in the United States. We organize hikes to many of the most beautiful and 
iconic locations around the country.
We promote hiking as a tool to improve physical and mental fitness because hiking is a process of overcoming challenges. To hike up a 
mountain is to conquer one's physical and mental limitation. We believe hiking could be a process to discover ourselves and to push the 
boundaries of our potential.
Our goal is to educate and train a new generation of hikers who are physically fit, mentally strong, and confident to face life's challenges.
US Hiking currently has 6 chapters: Los Angeles, Bay Area, Monterey, Ventura County, Orange County, and San Diego serving nearly 12,000 members. 
During hiking season, nearly 100 new members join our group every week, making US Hiking the fastest growing hiking group in the U.S.
Join us today, and help us spread the message of self-empowerment through hiking."

about3 = "We love to just... go! There is something in human nature, and something in the American character, that will continue to call to 
those who ride and those who dream of riding to faraway places. We're two locals who want to do just that, to share our knowledge of the 
Bay Area and our secret (or not so secret) favorite spots along the road. Join us for one of our upcoming rides TBA soon..."

# Pets
about4 = "Welcome to the BarkHappy SF Friends meetup! The group is dedicated to getting our dogs together to socialize and have fun. 
We also want more area dog owners to meet each other and make friends. Welcome! and see you soon!"

about5 = "Calling all Doodle owners! Considering the number of labradoodles, goldendoodles and other oodles of doodles in the Bay Area, 
we meet regularly at Crissy Field and other places/parks where they allow off-leash fun! Watch your doods frolic and get to know the 
awesome Doodle pawrents...what could be better?"

about6 = "Our Bulldog Meetup Group meets at Crissy Field monthly to socialize our dogs and ourselves.
It's a great opportunity to meet new people and new dogs. With the growing popularity of the breed, 
we get a lot of people who come out just to meet others and ask questions about being a bulldog owner, etc."

# Learning
about7 = "ScratchEd Meetups are peer-designed professional learning experiences inspired by the unconference model. 
This means that at any given event, you decide what your learning looks like! At a Meetup, you can share, create, and 
learn with other educators who are also passionate about teaching with Scratch in the classroom. Anyone who is interested 
in connecting with fellow educators and learning more about using Scratch in educational settings is welcome to participate.
Sound intriguing? We hope to see you soon!"

about8 = "Wonderfest’s Mission is to inspire and nurture a deep sense of wonder about the world. Through science education programs, 
Wonderfest stimulates curiosity, promotes careful reasoning, challenges unexamined beliefs, and encourages life-long learning. Wonderfest, 
the San Francisco Bay Area Beacon of Science, is a 501(c)(3) nonprofit corporation."

about9 = "This is a group for women and non-binary persons interested in Machine Learning and Data Science. We meet to socialize, and to discuss 
machine learning and data science in an informal setting with the purpose of building a community around women in these fields. We are openly inclusive 
of anyone who identifies as female, genderqueer or non-binary. Men who support our mission are invited to attend our meetups as guests of female members 
or with permission from the organizers (please send a message to introduce yourself!), though priority will be given to female members if an event is 
overbooked."

# Movements
about10 = "We are professional women working in the clean technology and sustainability space, from the entry level to the executive level. 
We meet once a month to network and learn the latest developments in the green movement from speakers and panelists. Topics covered include: 
renewable energy (solar, wind biofuel, etc), water, smart grid, biomass, carbon reduction, sustainable transportation, energy efficiency, 
sustainability, green buildings and many other technologies that aim to make our world a cleaner, more sustainable place."

about11 = "Knowledge is powerful. The purpose of this group is to pool our resources and work together for a more affordable San Francisco Bay Area. 
We will come together for think tanks, informational sessions, workshops, and whatever the group needs to make progress. Housing can be affordable 
if we build the homes ourselves, use donated or recycled materials, and by building smaller. No experience is necessary. The founder of this group 
is the founder of Care Association, a San Francisco-based nonprofit dedicated to finding innovative solutions for affordable housing."

about12 = "Silicon Valley Entrepreneurs (SVE) is the largest grassroots movements of founders and developers in the Bay Area since 2008. 
This community organization provides opportunities for startups to share their passions with other members broader startup ecosystem. 
Now with 30,000+ members, we have events every week! So join us be a part of our pitch events, co-founder matching nights, panel discussions 
and even our fun mixers!"

# Food & Drink
about13 = "Let's get together to eat our way around the world!.Here in the Bay Area, we are so lucky to have so many restaurants from so 
many different countries. Immigrants have settled in the Bay Area over the years, bringing along with them their native cooking customs, 
family recipes and knowledge of exotic ingredients. The result is a United Nations of cuisines celebrated in restaurants that allow locals 
to travel the world without ever leaving home."

about14 = "What is Food Tech? Are you a foodie who loves tech? Or a techie who loves food? Or a person who loves to mingle with chefs, 
foodies and young entrepreneurs? Eat, drink, mix, mingle, and learn with chefs, foodies, and techies!!"

about15 = "Are you a home brewer that wants to meet other home brewers? Want to learn how to brew your own beer? This group's for you!
The San Francisco Homebrewers Guild was established to serve as an organizing force for the local homebrewer community. Our goal is to 
encourage the art and craft of homebrewing and to bring local brewers together. In 2012, we grew to about 80 dues-paying members, at the 
end of 2013 we had approximately 170 dues-paying members and a mailing list of over 700 local Bay Area beer geeks and homebrewers. 
We continue to grow! We must be doing something right, come see if you want to join up, too!"

# Sports &amp; Fitness
about16 = "We play pickup soccer at the big rec fields in Golden Gate Park by 7th and Lincoln. All skill levels welcome.
Games happen on Saturdays and start at 11:00am. We play dark vs light, so please try to bring a shirt of each color. As this is pickup, 
we don't play rough (no slide tackles). Required - Cleats and a friendly disposition."

about17 = "Stay Fit & Have FUN!
We are an active, recreational, fit, social group who enjoys doing anything and everything related to fitness or having fun, including but
not limited to, hiking, cycling, kayaking, skiing, music in the park, happy hours, potlucks, game nights, wine/beer tasting, occasional pool
parties, eating and so much more!!!
Although most of our events are in the East Bay, we also have activities all over the Bay Area and occasionally further away, all depending 
on what people want to do. Come out and join us for one of our activities, have some fun and make some amazing friends along the way!"

about18 = "Bay Area Tennis players are ready to have fun and stay fit playing tennis! From San Francisco to San Jose, Sunnyvale, 
Mountain View, Santa Clara, Palo Alto, Menlo Park, East Bay and more locations.
Bay Area Tennis Players is a not-for-profit group of individuals who love to play pickup tennis. We use this meetup site as a calendar 
to indicate when we would like to play and where. There are no fees to participate.
Ours is one of the largest and most active pickup tennis communities in the US, with hundreds of participants every week across the bay. 
The nice weather an nice people might be why!"

# Photography
about19 = "Whether you’re an avid photography enthusiast or just enjoy taking pictures, SF Photography Lovers is the perfect way to meet 
great people who share a passion for photography or have always wanted to learn more! Our members love travel, adventure, culture, and of 
course photography! Many of our events & activities are great for taking pictures, sharing pictures, and learning! We even do some big 
trips around the world and locally in the San Francisco Bay Area!"

about20 = "Welcome to the Bay Area Photography Events Meetup Group !
Our group is FREE to join and there are no membership dues. It is open to all photographers regardless of your current level of knowledge 
about photography, the kind of photography that you enjoy doing or the type of camera that you use.
We sponsor a variety of photography related events - workshops, classes, trips and unique events.
We also welcome your suggestions about the kind of events that you would like to have us offer.
If you have a special skill or knowledge that you would like to share with the group, please send the organizer an email with your ideas and suggestions.
Our goal is to help everyone take better pictures, become a better photographer - and have fun.
We look forward to having you join us at one of our events."

about21 = "Lovers of international travel and photography. Join our community to explore the world through photography. For over 6 years, we 
have been organizing photography tours to beautiful and unique destinations around the world for solo travelers, couples or everyone in between. 
From northern lights in Iceland to stunning landscape of Patagonia; From colorful cultures in India to amazing tribal ceremonies in Ethiopia...Come 
with us to explore!"

# Language &amp; Culture
about22 = "The aim of this group is to bring together internationally-minded people with a European affinity. Through convivial cross-cultural social
gatherings we are building a vibrant circle of cosmopolitan friends who meet, talk, exchange experiences, practice their language skills, or just 
relax and feel at home.
Anyone born in Europe or who has lived there or has some other strong European connection is welcome. If an expatriate, you might have just recently
relocated to the U.S. or be a long-time naturalized citizen. Current members include folks from Austria, Belgium, Czech Republic, England, France, 
Germany, Greece, Hungary, India, Iran, Ireland, Israel, Italy, Netherlands, Poland, Portugal, Romania, Russia, Scotland, Spain, Sweden, Switzerland, 
Turkey, Ukraine and many other countries."

about23 = "Want to make new friends? Wanna just do some gupshup? Wanna meet other singles near you! Wanna discuss anything from Kashmir to Kanyakumari, 
Madhubala to Aishwarya Rai, bhel puri to mishti doi?
This group is for anyone who believes in living life to the fullest and wants to meet like minded, fun and jovial folks. Come and be part of a social 
scene where you can meet and flirt with fellow minglers for fun, friendship...and maybe more!"

about24 = "Chinese calligraphy is one of the most traditional art forms in the world, truly representative of eastern art and culture. I was taught and 
inspired by my grandfather to practice Chinese calligraphy from a young age. With my love and passion for creative arts, I adopt a modern twist to 
traditional Chinese calligraphy. My work showcases a perfect balance of traditional calligraphy art with modern flare. I hope to continue to spread 
the passion of Chinese calligraphy as a modern art form."

# create groups
group1 = Group.create(title: "SF Urban Treks", about: about1, organizer_id: user1.id, city_id: "1", category: category1)
group2 = Group.create(title: "US Hiking - Bay Area Chapter", about: about2, organizer_id: user2.id, city_id: "1", category: category1)
group3 = Group.create(title: "SF Bay Area Moto Meetup", about: about3, organizer_id: user3.id, city_id: "1", category: category1)

group4 = Group.create(title: "BarkHappy SF Area Dog Friends", about: about4, organizer_id: user4.id, city_id: "1", category: category2)
group5 = Group.create(title: "SF Doodles", about: about5, organizer_id: user5.id, city_id: "1", category: category2)
group6 = Group.create(title: "The San Francisco English Bulldog Meetup Group", about: about6, organizer_id: user6.id, city_id: "1", category: category2)

group7 = Group.create(title: "San Francisco Scratch Educator Meetup", about: about7, organizer_id: user7.id, city_id: "1", category: category3)
group8 = Group.create(title: "Wonderfest Science", about: about8, organizer_id: user8.id, city_id: "1", category: category3)
group9 = Group.create(title: "Bay Area Women in Machine Learning & Data Science", about: about9, organizer_id: user9.id, city_id: "1", category: category3)

group10 = Group.create(title: "Women in Cleantech & Sustainability", about: about10, organizer_id: user10.id, city_id: "1", category: category4)
group11 = Group.create(title: "SF Bay Tiny Homes for Truly Affordable Living", about: about11, organizer_id: user11.id, city_id: "1", category: category4)
group12 = Group.create(title: "Silicon Valley Entrepreneurs & Startups - SVE", about: about12, organizer_id: user12.id, city_id: "1", category: category4)

group13 = Group.create(title: "Going Around the World through Food!", about: about13, organizer_id: user13.id, city_id: "1", category: category5)
group14 = Group.create(title: "Food Tech Startups", about: about14, organizer_id: user14.id, city_id: "1", category: category5)
group15 = Group.create(title: "San Francisco Homebrewers Guild", about: about15, organizer_id: user15.id, city_id: "1", category: category5)

group16 = Group.create(title: "Pickup soccer in Golden Gate Park", about: about16, organizer_id: user16.id, city_id: "1", category: category6)
group17 = Group.create(title: "Stay Fit & Have FUN!", about: about17, organizer_id: user17.id, city_id: "1", category: category6)
group18 = Group.create(title: "Bay Area Tennis", about: about18, organizer_id: user18.id, city_id: "1", category: category6)

group19 = Group.create(title: "SF Photography Lovers!", about: about19, organizer_id: user19.id, city_id: "1", category: category7)
group20 = Group.create(title: "Bay Area Photography Events", about: about20, organizer_id: user20.id, city_id: "1", category: category7)
group21 = Group.create(title: "The Society of Travel Photographers", about: about21, organizer_id: user21.id, city_id: "1", category: category7)

group22 = Group.create(title: "Bay Area Friends of Europe", about: about22, organizer_id: user22.id, city_id: "1", category: category8)
group23 = Group.create(title: "Bay Area Desi Meetup", about: about23, organizer_id: user23.id, city_id: "1", category: category8)
group24 = Group.create(title: "Chinese Calligraphy", about: about24, organizer_id: user24.id, city_id: "1", category: category8)


# Add Group Photos:
image1 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/urbanTreks.png')
group1.photo.attach(io: image1, filename: 'urbanTreks.png')

image2 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/hiking.png')
group2.photo.attach(io: image2, filename: 'hiking.png')

image3 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/moto.png')
group3.photo.attach(io: image3, filename: 'moto.png')

image4 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/barkHappy.png')
group4.photo.attach(io: image4, filename: 'barkHappy.png')

image5 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/sfDoodles.png')
group5.photo.attach(io: image5, filename: 'sfDoodles.png')

image6 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/bulldogs.png')
group6.photo.attach(io: image6, filename: 'bulldogs.png')

image7 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/scratch.png')
group7.photo.attach(io: image7, filename: 'scratch.png')

image8 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/wonderfestScience.png')
group8.photo.attach(io: image8, filename: 'wonderfestScience.png')

image9 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/womenMachLearning.png')
group9.photo.attach(io: image9, filename: 'womenMachLearning.png')

image10 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/womenCleantech.png')
group10.photo.attach(io: image10, filename: 'womenCleantech.png')

image11 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/tinyHome.png')
group11.photo.attach(io: image11, filename: 'tinyHome.png')

image12 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/sve.png')
group12.photo.attach(io: image12, filename: 'sve.png')

image13 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/eatAroundTheWorld.png')
group13.photo.attach(io: image13, filename: 'eatAroundTheWorld.png')

image14 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/goodTech.png')
group14.photo.attach(io: image14, filename: 'goodTech.png')

image15 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/homebrewers.png')
group15.photo.attach(io: image15, filename: 'homebrewers.png')

image16 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/soccer.png')
group16.photo.attach(io: image16, filename: 'soccer.png')

image17 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/fitFun.png')
group17.photo.attach(io: image17, filename: 'fitFun.png')

image18 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/tennis.png')
group18.photo.attach(io: image18, filename: 'tennis.png')

image19 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/sfPhotoLove.png')
group19.photo.attach(io: image19, filename: 'sfPhotoLove.png')

image20 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/bayAreaPhotographers.png')
group20.photo.attach(io: image20, filename: 'bayAreaPhotographers.png')

image21 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/travelSociety.png')
group21.photo.attach(io: image21, filename: 'travelSociety.png')

image22 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/europe.png')
group22.photo.attach(io: image22, filename: 'europe.png')

image23 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/desi.png')
group23.photo.attach(io: image23, filename: 'desi.png')

image24 = open('https://greet-up-seeds.s3-us-west-1.amazonaws.com/caligraphy.png')
group24.photo.attach(io: image24, filename: 'caligraphy.png')



# create JOINS table for groupees
Membership.create(group_id: group1.id, user_id: user2.id)
Membership.create(group_id: group1.id, user_id: user3.id)
Membership.create(group_id: group1.id, user_id: user4.id)
Membership.create(group_id: group1.id, user_id: user5.id)
Membership.create(group_id: group1.id, user_id: user6.id)
Membership.create(group_id: group1.id, user_id: user7.id)

Membership.create(group_id: group2.id, user_id: user3.id)
Membership.create(group_id: group2.id, user_id: user4.id)
Membership.create(group_id: group2.id, user_id: user5.id)
Membership.create(group_id: group2.id, user_id: user6.id)
Membership.create(group_id: group2.id, user_id: user7.id)
Membership.create(group_id: group2.id, user_id: user8.id)

Membership.create(group_id: group3.id, user_id: user4.id)
Membership.create(group_id: group3.id, user_id: user5.id)
Membership.create(group_id: group3.id, user_id: user6.id)
Membership.create(group_id: group3.id, user_id: user7.id)
Membership.create(group_id: group3.id, user_id: user8.id)
Membership.create(group_id: group3.id, user_id: user9.id)

Membership.create(group_id: group4.id, user_id: user5.id)
Membership.create(group_id: group4.id, user_id: user6.id)
Membership.create(group_id: group4.id, user_id: user7.id)
Membership.create(group_id: group4.id, user_id: user8.id)
Membership.create(group_id: group4.id, user_id: user9.id)
Membership.create(group_id: group4.id, user_id: user10.id)

Membership.create(group_id: group5.id, user_id: user6.id)
Membership.create(group_id: group5.id, user_id: user7.id)
Membership.create(group_id: group5.id, user_id: user8.id)
Membership.create(group_id: group5.id, user_id: user9.id)
Membership.create(group_id: group5.id, user_id: user10.id)
Membership.create(group_id: group5.id, user_id: user11.id)

Membership.create(group_id: group6.id, user_id: user7.id)
Membership.create(group_id: group6.id, user_id: user8.id)
Membership.create(group_id: group6.id, user_id: user9.id)
Membership.create(group_id: group6.id, user_id: user10.id)
Membership.create(group_id: group6.id, user_id: user11.id)
Membership.create(group_id: group6.id, user_id: user12.id)

Membership.create(group_id: group7.id, user_id: user8.id)
Membership.create(group_id: group7.id, user_id: user9.id)
Membership.create(group_id: group7.id, user_id: user10.id)
Membership.create(group_id: group7.id, user_id: user11.id)
Membership.create(group_id: group7.id, user_id: user12.id)
Membership.create(group_id: group7.id, user_id: user13.id)

Membership.create(group_id: group8.id, user_id: user9.id)
Membership.create(group_id: group8.id, user_id: user10.id)
Membership.create(group_id: group8.id, user_id: user11.id)
Membership.create(group_id: group8.id, user_id: user12.id)
Membership.create(group_id: group8.id, user_id: user13.id)
Membership.create(group_id: group8.id, user_id: user14.id)

Membership.create(group_id: group9.id, user_id: user10.id)
Membership.create(group_id: group9.id, user_id: user11.id)
Membership.create(group_id: group9.id, user_id: user12.id)
Membership.create(group_id: group9.id, user_id: user13.id)
Membership.create(group_id: group9.id, user_id: user14.id)
Membership.create(group_id: group9.id, user_id: user15.id)

Membership.create(group_id: group10.id, user_id: user11.id)
Membership.create(group_id: group10.id, user_id: user12.id)
Membership.create(group_id: group10.id, user_id: user13.id)
Membership.create(group_id: group10.id, user_id: user14.id)
Membership.create(group_id: group10.id, user_id: user15.id)
Membership.create(group_id: group10.id, user_id: user16.id)

Membership.create(group_id: group11.id, user_id: user12.id)
Membership.create(group_id: group11.id, user_id: user13.id)
Membership.create(group_id: group11.id, user_id: user14.id)
Membership.create(group_id: group11.id, user_id: user15.id)
Membership.create(group_id: group11.id, user_id: user16.id)
Membership.create(group_id: group11.id, user_id: user17.id)

Membership.create(group_id: group12.id, user_id: user13.id)
Membership.create(group_id: group12.id, user_id: user14.id)
Membership.create(group_id: group12.id, user_id: user15.id)
Membership.create(group_id: group12.id, user_id: user16.id)
Membership.create(group_id: group12.id, user_id: user17.id)
Membership.create(group_id: group12.id, user_id: user18.id)

Membership.create(group_id: group13.id, user_id: user14.id)
Membership.create(group_id: group13.id, user_id: user15.id)
Membership.create(group_id: group13.id, user_id: user16.id)
Membership.create(group_id: group13.id, user_id: user17.id)
Membership.create(group_id: group13.id, user_id: user18.id)
Membership.create(group_id: group13.id, user_id: user19.id)

Membership.create(group_id: group14.id, user_id: user15.id)
Membership.create(group_id: group14.id, user_id: user16.id)
Membership.create(group_id: group14.id, user_id: user17.id)
Membership.create(group_id: group14.id, user_id: user18.id)
Membership.create(group_id: group14.id, user_id: user19.id)
Membership.create(group_id: group14.id, user_id: user20.id)

Membership.create(group_id: group15.id, user_id: user16.id)
Membership.create(group_id: group15.id, user_id: user17.id)
Membership.create(group_id: group15.id, user_id: user18.id)
Membership.create(group_id: group15.id, user_id: user19.id)
Membership.create(group_id: group15.id, user_id: user20.id)
Membership.create(group_id: group15.id, user_id: user21.id)

Membership.create(group_id: group16.id, user_id: user17.id)
Membership.create(group_id: group16.id, user_id: user18.id)
Membership.create(group_id: group16.id, user_id: user19.id)
Membership.create(group_id: group16.id, user_id: user20.id)
Membership.create(group_id: group16.id, user_id: user21.id)
Membership.create(group_id: group16.id, user_id: user22.id)

Membership.create(group_id: group17.id, user_id: user18.id)
Membership.create(group_id: group17.id, user_id: user19.id)
Membership.create(group_id: group17.id, user_id: user20.id)
Membership.create(group_id: group17.id, user_id: user21.id)
Membership.create(group_id: group17.id, user_id: user22.id)
Membership.create(group_id: group17.id, user_id: user23.id)

Membership.create(group_id: group18.id, user_id: user19.id)
Membership.create(group_id: group18.id, user_id: user20.id)
Membership.create(group_id: group18.id, user_id: user21.id)
Membership.create(group_id: group18.id, user_id: user22.id)
Membership.create(group_id: group18.id, user_id: user23.id)
Membership.create(group_id: group18.id, user_id: user24.id)

Membership.create(group_id: group19.id, user_id: user20.id)
Membership.create(group_id: group19.id, user_id: user21.id)
Membership.create(group_id: group19.id, user_id: user22.id)
Membership.create(group_id: group19.id, user_id: user23.id)
Membership.create(group_id: group19.id, user_id: user24.id)
Membership.create(group_id: group19.id, user_id: user25.id)

Membership.create(group_id: group20.id, user_id: user21.id)
Membership.create(group_id: group20.id, user_id: user22.id)
Membership.create(group_id: group20.id, user_id: user23.id)
Membership.create(group_id: group20.id, user_id: user24.id)
Membership.create(group_id: group20.id, user_id: user25.id)
Membership.create(group_id: group20.id, user_id: user26.id)

Membership.create(group_id: group21.id, user_id: user22.id)
Membership.create(group_id: group21.id, user_id: user23.id)
Membership.create(group_id: group21.id, user_id: user24.id)
Membership.create(group_id: group21.id, user_id: user25.id)
Membership.create(group_id: group21.id, user_id: user26.id)
Membership.create(group_id: group21.id, user_id: user27.id)

Membership.create(group_id: group22.id, user_id: user23.id)
Membership.create(group_id: group22.id, user_id: user24.id)
Membership.create(group_id: group22.id, user_id: user25.id)
Membership.create(group_id: group22.id, user_id: user26.id)
Membership.create(group_id: group22.id, user_id: user27.id)
Membership.create(group_id: group22.id, user_id: user28.id)

Membership.create(group_id: group23.id, user_id: user24.id)
Membership.create(group_id: group23.id, user_id: user25.id)
Membership.create(group_id: group23.id, user_id: user26.id)
Membership.create(group_id: group23.id, user_id: user27.id)
Membership.create(group_id: group23.id, user_id: user28.id)
Membership.create(group_id: group23.id, user_id: user29.id)

Membership.create(group_id: group24.id, user_id: user25.id)
Membership.create(group_id: group24.id, user_id: user26.id)
Membership.create(group_id: group24.id, user_id: user27.id)
Membership.create(group_id: group24.id, user_id: user28.id)
Membership.create(group_id: group24.id, user_id: user29.id)
Membership.create(group_id: group24.id, user_id: user30.id)





# create organizers
# Organizer.create(intro: "Introduce yourself", summary: "Short Summary", story: "What makes your story unique", user_id: user1.id)