require 'rails_helper'

RSpec.describe Property, type: :model do

    it "is valid property" do
      property = Property.new(
        id: 999,
        title: "Home in center Yerevan",
        propType: "room",
        address:"Yerevan Pushkin street",
        price: "50",
        beds: "1",
        latitude: "40",
        longitude: "40",
        rooms: "1",
        guests: "2",
        description: "Good home in Yerevan",
        user_id: 1
        )
      expect(property).to be_valid
    end

    it "is not valid without a title" do 
      subject.title = nil
      expect(subject).to_not be_valid
    end
  
    it "is not valid without a address" do 
      subject.address = nil
      expect(subject).to_not be_valid
    end
  
    it "is not valid without a price" do 
      subject.price = nil
      expect(subject).to_not be_valid
    end
    it "is not valid without a beds" do 
      subject.beds = nil
      expect(subject).to_not be_valid
    end
    it "is not valid without a latitude" do 
      subject.latitude = nil
      expect(subject).to_not be_valid
    end
    it "is not valid without a longitude" do 
      subject.longitude = nil
      expect(subject).to_not be_valid
    end
    it "is not valid without a rooms" do 
      subject.rooms = nil
      expect(subject).to_not be_valid
    end
  
    it "is not valid without a guests" do 
      subject.guests = nil
      expect(subject).to_not be_valid
    end
    it "is not valid without a description" do 
      subject.description = nil
      expect(subject).to_not be_valid
    end

end
