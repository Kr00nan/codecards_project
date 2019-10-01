class Api::DecksController < ApplicationController
   before_action :set_user
   before_action :set_deck, only: [:show, :destroy]
  
   def index
    render json: Deck.all
   end

  def create
    deck = Deck.new(deck_params)
    if deck.save
      render json: deck
    else
      render json: { errors: deck.errors }, status: :unprocessable_entity 
    end
  end

  def show 
    render json: @deck
  end

  def destroy
    @deck.destroy
    render json: { message: 'Deck has been deleted :(' }
  end

  private 
  def set_deck 
    @deck = Deck.find(params[:id])
  end

  def deck_params
    params.require(:deck).permit(:title, :public)
  end

  def set_user
    @user = User.find(params[:user_id])
  end

end
