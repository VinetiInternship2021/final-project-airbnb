Rails.application.routes.draw do
  resources :properties
  # resource :users, only: [:create,:index]
  resource :users, only: [:create]
  post "/login", to: "users#login"
  # post '/createProp' to: 'properties#create'
  get "/auto_login", to: "users#auto_login"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
