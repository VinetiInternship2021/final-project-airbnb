class ImgList < ApplicationRecord
    validates :imgUrl, presence: true, length: { minimum: 8, maximum: 1024 },
    format: { with: /\A(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?\z/ix }

    belongs_to :property
end
