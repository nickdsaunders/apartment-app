user1 = User.create email:"nick@gmail.com", password:"passwordA!", password_confirmation:"passwordA!"

user2 = User.create email:"sarah@gmail.com", password:"password1!", password_confirmation:"password1!"

apartments = [
  {
    street: "1234 La Brea Ave",
    city: "Los Angeles",
    state: "California",
    manager: "Asha",
    email: "asha-huxley@gmail.com",
    price: "3500",
    bedrooms: 2,
    bathrooms: 2,
    pets: "yes",
    img:
      "https://www.nationalcorporatehousing.com/sites/default/files/styles/768x500/public/properties/25-the-huxley-apartments-exterior-west-hollywood-ca.jpg?itok=lwHecpDu",
    title: "The Huxley", 
    user_id: user1.id
  },
  {
    street: "1455 Kettner Blvd",
    city: "San Diego",
    state: "California",
    manager: "Lynne",
    email: "lynne-allegro@gmail.com",
    price: "3200",
    bedrooms: 2,
    bathrooms: 2,
    pets: "yes",
    img:
      "https://images1.apartments.com/i2/zpkzKQF06kMAAgRDZ-IcXwyzP_K4nZjlH7Q8rJA4Oeg/117/allegro-towers-san-diego-ca-building-photo.jpg?p=1",
    title: "Allegro Towers", 
    user_id: user1.id
  },
  {
    street: "2020 Gordon St",
    state: "California",
    manager: "Marge",
    city: "Los Angeles",
    email: "marge-sgtower@gmail.com",
    price: "2800",
    bedrooms: 2,
    bathrooms: 1,
    pets: "no",
    img:
      "https://www.balfourbeattyus.com/Balfour-dev.allata.com/media/content-media/Insights/SunsetAndGordon1-OurWork-ProjectPortfolio-Insights_590X380.png?ext=.png",
    title: "Sunset & Gordon", 
    user_id: user2.id
  },
]

apartments.each do |attributes|
    Apartment.create attributes
    puts "creating apartment #{attributes}"
  end