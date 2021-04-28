class SessionsController < ApplicationController
    def create
      host = Host
              .find_by(email: params["email"])
  
      if host && host.password == params["password"] #A normal password validation required this is just a test
        render json: {
          status: :created,
          logged_in: true,
          host_token: host.as_json(methods: [:authentication_token])
            
        }
      else
        render json: { status: 401 }
      end
    end
  end