class ImgListsController < ApplicationController
  before_action :set_img_list, only: [:show, :update, :destroy]
  # before_action :authorized,   only: [:show, :update, :destroy,:create]

  # GET /img_lists
  def index
    @img_lists = ImgList.all
    render json: @img_lists
  end

  # GET /img_lists/1
  def show
    render json: @img_list
  end

  # POST /img_lists
  def create
    @img_list = ImgList.new(img_list_params)

    if @img_list.save
      render json: @img_list, status: :created, location: @img_list
    else
      render json: @img_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /img_lists/1
  def update
    if @img_list.update(img_list_params)
      render json: @img_list
    else
      render json: @img_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /img_lists/1
  def destroy
    @img_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_img_list
      @img_list = ImgList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def img_list_params
      params.require(:img_list).permit(:imgUrl, :property_id)
    end
end
