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
