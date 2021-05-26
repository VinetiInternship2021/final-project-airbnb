require 'rails_helper'

RSpec.describe Order, type: :model do
  it "is valid " do
    order = Order.new(
      priceNight: "50",
      totalAmount: "150",
      start_date:"2021-05-24",
      end_date: "2021-05-28",
      user_id: 1,
      property_id: 1
      )
    expect(order).to be_valid
  end

  it "is not valid without a totalAmount" do 
    subject.totalAmount = nil
    expect(subject).to_not be_valid
  end
  
  it "is not valid without a start_date" do 
    subject.start_date = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a end_date" do 
    subject.end_date = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a priceNight" do 
    subject.priceNight = nil
    expect(subject).to_not be_valid
  end

end
