class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :title
      t.boolean :public
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
