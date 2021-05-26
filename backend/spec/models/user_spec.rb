# rspec ./spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do

  it "is valid " do
    user = User.new(firstName: "Arthur",
      lastName: "Harutyunyan",
      email:"Arthurart@hotmail.com",
      password: "123456",
      role: "host"
      )
    expect(user).to be_valid
  end
  subject { described_class.new }  
  it "is  user filds" do 
    subject.firstName = "Arthur"
    subject.lastName  = "Harutyunyan"
    subject.email     = 'harutyunyan@gmail.com',
    subject.password  = '789456',
    subject.role      = 'reg'
    expect(subject).to be_valid
  end

  it "is not valid without a lastName" do 
    subject.firstName = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a email" do 
    subject.email = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a password" do 
    subject.password = nil
    expect(subject).to_not be_valid
  end

  it "is not valid without a role" do 
    subject.role = nil
    expect(subject).to_not be_valid
  end


end
