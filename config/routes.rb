Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users, only: :update
    resources :decks do
      resources :cards
    end
    resources :review_cards, only: [:index, :create, :destroy]
    get 'public_decks', to: 'decks#public_decks'
    get 'public_cards', to: 'cards#public_cards'
    get 'decks/:deck_id/shuffled_cards', to: 'cards#shuffled_index'
    get 'focus', to: 'review_cards#shuffled_index'
  end

  get '*other', to: 'static#index'
end
