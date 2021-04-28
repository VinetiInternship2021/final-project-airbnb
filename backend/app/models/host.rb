class Host < ApplicationRecord   
    validates_uniqueness_of :email
end
