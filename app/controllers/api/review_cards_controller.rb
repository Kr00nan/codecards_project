class Api::ReviewCardsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: ReviewCard.all_cards(current_user.id)
  end

  def shuffled_index
    render json: ReviewCard.all_cards(current_user.id).shuffle
  end

  def create
    if ReviewCard.where({ user_id: current_user.id, card_id: params[:card_id], }).length === 0
      review_card = current_user.review_cards.new(review_card_params)
      if review_card.save
        render json: review_card
      else
        render json: { errors: review_card.errors }, status: :unprocessable_entity
      end
    else
      render json: { message: 'This card is already in your focus deck' }
    end
  end

  def destroy
    review_card = current_user.review_cards.find(params[:id])
    review_card.destroy
  end

  private
    def review_card_params
      params.require(:review_card).permit(:card_id)
    end
end
