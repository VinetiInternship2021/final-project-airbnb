class RegUsersController < ApplicationController
  before_action :set_reg_user, only: [:show, :update, :destroy]

  # GET /reg_users
  def index
    @reg_users = RegUser.all

    render json: @reg_users
  end

  # GET /reg_users/1
  def show
    render json: @reg_user
  end

  # POST /reg_users
  def create
    @reg_user = RegUser.new(reg_user_params)

    if @reg_user.save
      render json: @reg_user, status: :created, location: @reg_user
    else
      render json: @reg_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reg_users/1
  def update
    if @reg_user.update(reg_user_params)
      render json: @reg_user
    else
      render json: @reg_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reg_users/1
  def destroy
    @reg_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reg_user
      @reg_user = RegUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reg_user_params
      params.require(:reg_user).permit(:firstName, :lastName, :email, :password)
    end
end
