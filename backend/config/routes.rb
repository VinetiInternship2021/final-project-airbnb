Rails.application.routes.draw do
  resources :img_lists
  
  resources :orders
  get '/searchOrder', to: 'orders#searchOrder'
  get '/userOrders', to: 'orders#userOrders'


  resources :properties
  post '/create_property', to: 'properties#create'
  get '/activeProperties', to: 'properties#activeProperties'
  get '/search', to: 'properties#search'
  get '/myPropertyies', to: 'properties#myPropertyies'
 

  resource :users, only: [:create]
  put '/updateStatus',to: 'users#updateStatus' #update status users
  get '/userLists', to: 'users#index'

  post "/login", to: "users#login"
  get "/auto_login", to: "users#auto_login"
end
