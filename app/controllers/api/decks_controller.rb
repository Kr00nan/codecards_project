class Api::DecksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_deck, only: [:show, :update, :destroy]
  
  def index
    render json: current_user.decks.all
  end

  def show 
    render json: @deck
  end

  def create
    deck = current_user.decks.new(deck_params)
    if deck.save
      render json: deck
    else
      render json: { errors: deck.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if @deck.update(deck_params)
      render json: @deck
    else
      render json: { errors: @deck.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    @deck.destroy
    render json: { message: 'Deck has been deleted :(' }
  end

  def public_decks
    render json: Deck.where(public: true)
  end

  private
  def set_deck 
    @deck = Deck.find(params[:id])
  end

  def deck_params
    params.require(:deck).permit(:title, :public)
  end

end
