class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.text :name
      t.integer :time

      t.timestamps
    end
  end
end
