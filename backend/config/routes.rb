Rails.application.routes.draw do
  resources :img_lists

  resources :properties 
  post '/create_property', to: 'properties#create'
  get '/activeProperties', to: 'properties#activeProperties'
  get '/search', to: 'properties#search'

  resource :users, only: [:create]
  put '/updateStatus',to: 'users#updateStatus' #update status users
  get '/userLists', to: 'users#index'
  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
end
