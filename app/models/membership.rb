class Membership < ApplicationRecord
    attr_reader :membership
    
    belongs_to :user
    belongs_to :group
end
