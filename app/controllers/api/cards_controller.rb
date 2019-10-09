class Api::CardsController < ApplicationController
  before_action :set_deck
  before_action :set_card, only: [:show, :update, :destroy]
  
  def index
    render json: @deck.cards.order(:id)
  end

  def show
    render json: @card
  end

  def create
    card = @deck.cards.new(card_params)
    if card.save
      render json: card
    else
      render json: card.errors, status: 422
    end
  end

  def update
    if @card.update(card_params)
      render json: @card
    else
      render json: @card.errors, status: 422
    end
  end

  def destroy
    @card.destroy
  end

  private
    def set_deck
      @deck = Deck.find(params[:deck_id])
    end

    def card_params
      params.require(:card).permit(:question, :answer)
    end

    def set_card
      @card = Card.find(params[:id])
    end

end
