class Event < ApplicationRecord
  validates :Your_name, presence: true
  validates :Event_title, presence: true
  validates :Date, presence: true
  validates :Description, presence: true
end
