# User.create( email: 'test@test.com', password: 'password', admin: false)
# User.create( email: 'kroon@test.com', password: 'password', admin: true)
# User.create( email: 'brown@test.com', password: 'password', admin: true)
# User.create( email: 'Gish@test.com', password: 'password', admin: true)
# User.create( email: 'Garcia@test.com', password: 'password', admin: true)

# 5.times do
# d = Deck.create(title: Faker::Book.title, public: false, user_id: rand(1..5))
#   10.times do
#     d.cards.create(
#       question: Faker::Lorem.paragraph,
#       answer: Faker::Lorem.sentence
#   )
# end
# end

d1 = Deck.create(title: "HTML", public: true,)
time = 0
50.times do
  time += 1
  d1.cards.create( 
    question: "/images/html_png/HTML_Q#{time}.png",
    answer: "/images/html_png/HTML_A#{time}.png",
  )
end

d2 = Deck.create(title: "CSS", public: true,)
time = 0
52.times do
  time += 1
  d2.cards.create( 
    question: "/images/css_png/CSS_Q#{time}.png",
    answer: "/images/css_png/CSS_A#{time}.png",
  )
end

d3 = Deck.create(title: "RUBY", public: true,)
time = 0
50.times do
  time += 1
  d3.cards.create( 
    question: "/images/ruby_png/Ruby_Q#{time}.png",
    answer: "/images/ruby_png/Ruby_A#{time}.png",
  )
end

d4 = Deck.create(title: "JS", public: true,)
time = 0
50.times do
  time += 1
  d4.cards.create( 
    question: "/images/js_png/JS_Q#{time}.png",
    answer: "/images/js_png/JS_A#{time}.png",
  )
end
