require 'rails_helper'

RSpec.describe ImgList, type: :model do
  it "is valid " do
    img = ImgList.create(
      imgUrl: 'https://lp-cms-production.imgix.net/features/2017/10/view-from-cascade-yerevan-armenia-cs-3000-af233802a806.jpg',
      property_id: 1
    )
    expect(img).to be_valid
  end
  it "is not valid without a imgUrl" do 
    subject.imgUrl = nil
    expect(subject).to_not be_valid
  end
end
