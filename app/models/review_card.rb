class ReviewCard < ApplicationRecord
  belongs_to :user
  belongs_to :card

  def self.all_cards(user)
    find_by_sql(["
      SELECT cards.*, review_cards.id AS rc_id
      FROM review_cards
      INNER JOIN cards
        ON review_cards.card_id = cards.id
      WHERE user_id = #{user}
    "])
  end
end
