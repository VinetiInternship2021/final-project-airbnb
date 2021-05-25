#rspec ./spec/routing/users_routing_spec.rb
require "rails_helper"
RSpec.describe UsersController, type: :routing do
  describe "routing" do    

    it "routes to userLists" do
      expect(get: "/userLists").to route_to("users#index")
    end
    it "logged user" do
      expect(get: "/auto_login").to route_to("users#auto_login")
    end

    it "sing in" do
      expect(put: "/login").to route_to("users#login")
    end

    it "resource :users #create" do
      expect(post: "/users").to route_to("users#create")
    end 

    it "Is Login #auto_login" do
      expect(get: "/auto_login").to route_to("users#auto_login")
    end  
  
  end
end
