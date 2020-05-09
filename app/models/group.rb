class Group < ApplicationRecord
    validates :title, :about, :organizer_id, :city_id, :category, presence: true

    has_one_attached :photo

    belongs_to :organizer,
    foreign_key: :organizer_id,
    class_name: :User

    has_many :memberships

    has_many :members,
    through: :memberships,
    source: :user

end
