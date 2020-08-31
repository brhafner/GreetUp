class Event < ApplicationRecord
    validates :name, :details, :group_id, :host_id, :day, presence: true

    has_one_attached :photo

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    has_many :attendances

    has_many :attendees,
    through: :attendances,
    source: :user
end
