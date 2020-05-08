class Group < ApplicationRecord
    validates :title, :about, :organizer_id, :city_id, :category, presence: true

    has_one_attached :photo

    belongs_to :organizer,
        foreign_key: :organizer_id,
        class_name: :User



    # CHANGE THIS once you create an organizers & groupings table
    # has_many :groupees,
    #     through: :goupings
    #     source: :users
end
