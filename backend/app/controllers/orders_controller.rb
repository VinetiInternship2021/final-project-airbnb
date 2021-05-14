class OrdersController < ApplicationController
  before_action :set_order, only: [:show, :update, :destroy]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  def userOrders
    @orders  = Order.where(user_id: User.where(id:params[:id]))
    render json: @orders
  end
  def searchOrder
    #date format 2021-05-13
    #url syntax http://localhost:3000/searchOrder?start=2021-05-15&end=2021-05-16
    dateStart = params[:start]
    dateEnd = params[:end]
    @orders  =  Order.where.not('start_date <= ? AND end_date >= ?', dateStart, dateEnd) 
    render json: @orders
  end
  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end


  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:user_id, :property_id, :priceNight, :totalAmount, :start_date, :end_date)
    end
end
