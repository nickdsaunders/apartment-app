# require 'rails_helper'

# RSpec.describe "Apartments", type: :request do

#   describe "GET /apartmentindex" do
#     it 'gets a list of Apartments' do
#       # Arrange - Create an Apartment in db for the response
#       Apartment.create(street: "1234 La Brea Ave",
#       city: "Los Angeles",
#       state: "Califorina",
#       manager: "Asha",
#       email: "asha-huxley@gmail.com",
#       price: "3500",
#       bedrooms: 2,
#       bathrooms: 2,
#       pets: "yes",
#       img:
#         "https://www.nationalcorporatehousing.com/sites/default/files/styles/768x500/public/properties/25-the-huxley-apartments-exterior-west-hollywood-ca.jpg?itok=lwHecpDu",
#       title: "The Huxley")

#       # Act - simulate the HTTP GET request
#       get '/apartmentindex'

#       # Assert
#       # Convert response into a Ruby Hash
#       apartment_response = JSON.parse(response.body)

#       # Assure successful response
#       expect(response).to have_http_status(:ok)

#       # Assure we got one result back as expected
#       expect(apartment_response.length).to eq 1
      
#       first_apartment = apartment_response.first
#       expect(first_apartment['title']).to eq 'The Huxley'
#       expect(first_apartment['street']).to eq '1234 La Brea Ave'
      
#     end
#   end
# end

 


