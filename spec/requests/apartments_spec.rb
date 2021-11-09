require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'ksilver@test.com', password: '123456', password_confirmation: '123456'
  end

  # -----index-----
  describe "GET /index" do
    it "gets a list of apartments" do
      Apartment.create street: '456 Big House Circle', city: 'Temecula', state: 'CA', manager: 'Anne Signhere', email: 'a.signhere@apart.listings.com', price: '4500', bedrooms: 6, bathrooms: 5, pets: 'no pets', user_id: user.id

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq 1

      apartment = apartments.first
      expect(apartment['street']).to eq '456 Big House Circle'
      expect(apartment['city']).to eq 'Temecula'
      expect(apartment['state']).to eq 'CA'
      expect(apartment['manager']).to eq 'Anne Signhere'
      expect(apartment['email']).to eq 'a.signhere@apart.listings.com'
    end
  end
end
