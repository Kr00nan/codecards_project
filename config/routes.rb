Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users
    resources :decks do
      resources :cards
    end
    get 'public_decks', to: 'decks#public_decks'
    get 'public_cards', to: 'cards#public_cards'
  end
end
