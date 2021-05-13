# frozen_string_literal: true

class ImgList < ApplicationRecord
    validates :imgUrl, presence: true, length: { minimum: 8, maximum: 1024 }
    
    @imagesFilePath = 'app/CSVs/images.csv'

    private
    def self.create_images_lists
        puts '::::::::::::::::::::::::::inserting images::::::::::::::::::::::::::'
        CSV.read(@imagesFilePath).each.with_index(1) { |record, index|
            imagesOfCurrentProperty = CSV.read(@imagesFilePath)[index]
            ImgList.create('imgUrl': imagesOfCurrentProperty[0], 'property_id': index )
            ImgList.create('imgUrl': imagesOfCurrentProperty[1], 'property_id': index )
            ImgList.create('imgUrl': imagesOfCurrentProperty[2], 'property_id': index )
        }
        puts '::::::::::::::::::::::::::::::inserted::::::::::::::::::::::::::'
    end

    if ImgList.count < 12
        self.create_images_lists()
    end
end
