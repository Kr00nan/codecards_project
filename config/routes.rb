Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :users do
      resources :decks
    end

    resources :decks do
      resources :cards
    end
  end
end
