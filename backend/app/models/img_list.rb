# frozen_string_literal: true

class ImgList < ApplicationRecord
  validates :imgUrl, presence: true, length: { minimum: 8, maximum: 1024 },
                    

end
