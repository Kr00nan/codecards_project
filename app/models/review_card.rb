class ReviewCard < ApplicationRecord
  belongs_to :user
  belongs_to :card

  def self.all_cards(user)
    find_by_sql(["
      SELECT cards.*, title, review_cards.id AS rc_id
      FROM review_cards
      INNER JOIN cards
        ON review_cards.card_id = cards.id
      INNER JOIN decks
        ON cards.deck_id = decks.id
      WHERE review_cards.user_id = #{user}
      ORDER BY rc_id
    "])
  end
end
