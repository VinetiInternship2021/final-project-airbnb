class PropertiesController < ApplicationController
 before_action :set_property, only:  [:show, :update, :destroy]
  before_action :authorized,   only:  [:show, :update, :destroy,:create]

  # GET /properties
  def index
    @properties = Property.all
    render json: @properties
  end

# ----------------------
  def activeProperties  
    @property = Property.where(user_id: User.where(isActive: true))
    render json: @property 
  end

  def search    
       # empty order with includes i think ;) //  AND start_date NOT NULL  
       # syntax example http://localhost:3000/search?guests=1&title=yerevan&start=2021-05-12&end=2021-05-13
       dateStart = params[:start]
       dateEnd = params[:end]
       guests = params[:guests]
       title = params[:title]

       if dateEnd ==nil and  dateStart==nil
          @property = Property.joins(:user).where("users.isActive = ? AND guests >= ? AND title LIKE ?", 
            true,
            guests,
            "%#{title}%",
           )
          return render json: @property
       end
        
       @property = Property.joins(:user)
                           .where("users.isActive = ? AND guests >= ? AND title LIKE ?", 
                            true,
                            guests,
                            "%#{title}%",
                           ).where.not(order: 
                                Order.where(
                                  'start_date BETWEEN ? AND ?
                                  OR end_date BETWEEN ? AND ?                     
                                 ', 
                                  dateStart,dateEnd,dateStart,dateEnd)
                                )
      render json: @property
  end



  def myProperties
    @property = Property.where(user_id: params[:id])
    render json: @property
  end
#-----------------------

  # GET /properties/1
  def show
    render json: @property
  end

  # POST /properties
  def create  
      @property = Property.new(property_params)
      if @property.save
        render json: @property, status: :created, location: @property
      else
        render json: @property.errors, status: :unprocessable_entity
       end     
  end

  # PATCH/PUT /properties/1
  def update 
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def property_params
      params.require(:property).permit(:title, :propType, :address, :latitude, :longitude,:price, :beds, :rooms, :guests, :description, :user_id)
    end
end
