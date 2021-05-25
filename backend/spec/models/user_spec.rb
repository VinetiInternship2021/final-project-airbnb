require 'rails_helper'

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(firstName: "Arthur",
      lastName: "Harutyunyan",
      email:"Arthurart@hotmail.com",
      password: "123456",
      role: "host"
      )
    expect(user).to be_valid
  end
end
