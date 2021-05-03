class UsersController < ApplicationController
    before_action :authorized, only: [:auto_login]

    def index
      
      @users = User.all
      render json: @users

    end
  # REGISTER
  def create
      @user = User.create(user_params)
      if @user.valid?
        token = encode_token({user_id: @user.id})
        render json: {user: @user, token: token}
      else
        render json: {error: "Invalid username or password"}
      end    
  end

  # LOGGING IN
  def login
    @user = User.find_by(email: params[:email])

    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: @user, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end


  def auto_login
    render json: @user
  end

  # pleas dont change log out this is test
  def log_out
    token = nil
    render json: @user
  end
  # dont change
  

  private

  def user_params
    params.permit(:firstName, :lastName,:email,:isActive,:role,:password)
  end
end
