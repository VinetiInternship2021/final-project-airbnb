#rspec ./spec/requests/users_spec.rb 
require 'rails_helper'
require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to test the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator. If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails. There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.

RSpec.describe "/users", type: :request do
  # This should return the minimal set of attributes required to create a valid
  # User. As you add validations to User, be sure to
  # adjust the attributes here as well.

  user = User.first_or_create!(
    firstName: "Jhon",
    lastName: "Malkovich",
    role: "host",
    email: "testUsertest@gmail.com",
    password: "123456"
  )
    


  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  # This should return the minimal set of values that should be in the headers
  # in order to pass any filters (e.g. authentication) defined in
  # UsersController, or in your router and rack
  # middleware. Be sure to keep this updated too.
  let(:valid_headers) {
    {}
  }

  # describe "GET /index" do
  #   it "renders a successful response" do
  #     User.create! valid_attributes
  #     get users_url, headers: valid_headers, as: :json
  #     expect(response).to be_successful
  #   end
  # end
  # describe "GET /show" do
  #   it "renders a successful response" do
  #     user = User.create! valid_attributes
  #     get user_url(user), as: :json
  #     expect(response).to be_successful
  #   end
  # end

  property = {
    title: "Good Home",
    propType: 'room',
    address: "Yerevan Center Arams street",
    price: 25,
    latitude: 40,
    longitude: 40,
    beds: 2,
    rooms: 2,
    guests: 1,
    description: "Good home in center Yerevan ;)"
    
  }
 
 
  describe 'user' do 
    context 'when user is authorized' do 
      it 'Shuld create property' do 
        myProperty = Property.new(property)
        myProperty.user = user
        myProperty.save
        get  properties_url
        expect(response).to be_successful
        
      end              
    end
    context 'when user is not authorized' do 
      it 'Shuld not create property' do        
          myProperty = Property.new(property)
          myProperty.save
          get  properties_url  
          expect(response).to be_successful
      end    
    end  
  end 
end