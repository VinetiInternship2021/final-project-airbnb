class ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # GET current property's all reviews
  def thisPropertyReviews
    @reviews = Review.where(property_id: params[:id])
    @avg_rating = @reviews.average(:rate).round(2).to_f
    render json: { reviews: @reviews, avg_rating: @avg_rating, count: @reviews.count }
  end

  # GET /reviews/1
  def show
    render json: @review
  end

  # POST /reviews
  def create
    review = Review.new(review_params)
    user_id = review_params[:user_id]

    if Property.exists?(user_id: user_id)
      user_id.eql? Property.find_by_id(review_params[:property_id]).user_id
      raise '>Trying to rate your own property? What a shame!'
    elsif Review.exists?(user_id: user_id)
      raise ">You've already rated this property."

    if review.save
      render json: review, status: :created, location: review
    else
      render json: { errors: review.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reviews/1
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reviews/1
  def destroy
    @review.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:title, :description, :rate, :property_id, :user_id)
    end
end
