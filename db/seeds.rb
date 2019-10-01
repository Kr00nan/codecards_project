
User.create( email: 'test@test.com', password: 'password', admin: false)
User.create( email: 'kroon@test.com', password: 'password', admin: true)
User.create( email: 'brown@test.com', password: 'password', admin: true)
User.create( email: 'Gish@test.com', password: 'password', admin: true)
User.create( email: 'Garcia@test.com', password: 'password', admin: true)

5.times do
d = Deck.create(title: Faker::Book.title, public: false, user_id: rand(1..5))
  10.times do
    d.cards.create(
      question: Faker::Lorem.paragraph,
      answer: Faker::Lorem.sentence
  )
end
end

