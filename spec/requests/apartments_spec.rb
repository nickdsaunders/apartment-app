require 'rails_helper'

RSpec.describe 'Apartments', type: :request do
  describe 'GET /apartments' do
    it 'gets a list of Apartments' do
      # Arrange - Create an Apartment in db for the response
      Apartment.create(street: '1455 Kettner Blvd',
      city: 'San Diego',
      state: 'Califorina',
      manager: 'Lynne',
      email: 'lynne-allegro@gmail.com',
      price: '3200',
      bedrooms: 2,
      bathrooms: 2,
      pets: 'yes',
      img:
        'url',
      title: 'Allegro Towers'
      )

      # Act - simulate the HTTP GET request
      get '/apartments'

      # Assert
      # Convert response into a Ruby Hash
      apartment_response = JSON.parse(response.body)

      # Assure successful response
      expect(response).to have_http_status(200)

      # Assure we got one result back as expected
      expect(apartment_response.length).to eq 1
      
      first_apartment = apartment_response.first
      expect(first_apartment['street']).to eq '1455 Kettner Blvd'
      expect(first_apartment['city']).to eq 'San Diego'
      expect(first_apartment['state']).to eq 'Califorina'
      
    end
  end

    describe 'POST /apartments' do
        it 'creates a new apartment' do
            #arrange
            apartment_params = {
                apartment: {
                    street: '1455 Kettner Blvd',
                    city: 'San Diego',
                    state: 'Califorina',
                    manager: 'Lynne',
                    email: 'lynne-allegro@gmail.com',
                    price: '3200',
                    bedrooms: 2,
                    bathrooms: 2,
                    pets: 'yes',
                    img:
                    'url',
                    title: 'Allegro Towers'
                }
            }
            #act
            post '/apartments', params:apartment_params
            #assert
            apartment = Apartment.first
            expect(apartment.street).to eq '1455 Kettner Blvd'
            expect(apartment.city).to eq 'San Diego'
            expect(apartment.state).to eq 'Califorina'
            
            apartment_response = JSON.parse(response.body)
            expect(apartment_response['street']).to eq '1455 Kettner Blvd'
            expect(apartment_response['city']).to eq 'San Diego'
            expect(apartment_response['state']).to eq 'Califorina'
        end
    end

end

 


