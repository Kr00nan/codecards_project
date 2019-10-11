class Card < ApplicationRecord
  belongs_to :deck

  def self.public_cards
    find_by_sql(["
      SELECT cards.*, title
      FROM cards
      INNER JOIN decks 
        ON deck_id = decks.id
      WHERE public
    "])
  end
end
