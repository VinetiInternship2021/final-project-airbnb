Rails.application.routes.draw do
  resources :apartments
  # resource :users, only: [:create,:index]
  resource :users, only: [:index]
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
