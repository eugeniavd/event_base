class CreateEvents < ActiveRecord::Migration[7.1]
  def change
    create_table :events do |t|
      t.string :Your_name
      t.string :Event_title
      t.date :Date
      t.text :Description

      t.timestamps
    end
  end
end
