class Host < ApplicationRecord   
    validates_uniqueness_of :email
    
    def authentication_token
        return ("authenticated with token 313151blabla")#add token authentication
    end
end
