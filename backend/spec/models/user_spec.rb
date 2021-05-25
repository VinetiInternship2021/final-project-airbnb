require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid user" do
    user = User.new(firstName: "Arthur",
      lastName: "Harutyunyan",
      email:"Arthurart@hotmail.com",
      password: "123456",
      role: "host"
      )
    expect(user).to be_valid
  end
  it "is not valid without a firstName"
  it "is not valid without a lastName"
  it "is not valid without a email"
  it "is not valid without a password"
  it "is not valid without a role"
end
