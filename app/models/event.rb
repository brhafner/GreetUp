class Event < ApplicationRecord
    validates :name, :details, :group_id, :host_id, :day, presence: true

    has_one_attached :photo

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    # has_many :attendences

    # has_many :members,
    # through: :memberships,
    # source: :user
end
