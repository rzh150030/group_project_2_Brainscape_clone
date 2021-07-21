from .db import db


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False, unique=True)

    decks = db.relationship('Deck', back_populates='category')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

    def to_dict_with_decks(self):
        return {
            'decks': [deck.to_dict() for deck in self.decks]
        }
