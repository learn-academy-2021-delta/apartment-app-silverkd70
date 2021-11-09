apartments = [
  {
    street: '246 Your Street',
    city: 'Temecula',
    state: 'CA',
    manager: 'W.M. Rent',
    email: 'w.rent@apart.listings.com',
    price: '1800',
    bedrooms: 2,
    bathrooms: 2,
    pets: 'small pets ok'
  },
  {
    street: '135 Mine Court',
    city: 'Lake Elsinore',
    state: 'CA',
    manager: 'Blake View',
    email: 'b.view@apart.listings.com',
    price: '1650',
    bedrooms: 3,
    bathrooms: 2,
    pets: 'dogs ok'
  },
  {
    street: '321 Keys Lane',
    city: 'Murietta',
    state: 'CA',
    manager: 'Anne Signhere',
    email: 'a.signherew@apart.listings.com',
    price: '2450',
    bedrooms: 4,
    bathrooms: 3,
    pets: 'no pets'
  }

]

first_user = User.first

apartments.each do |attribute|
  first_user.apartments.create attribute
end
