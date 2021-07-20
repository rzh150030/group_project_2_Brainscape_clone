from .db import db


class Deck(db.Model):
    __tablename__ = 'decks'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False, unique=True)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    category = db.relationship('Category', back_populates='decks')
    cards = db.relationship('Card', back_populates='deck')
    user = db.relationship("User", back_populates="decks")

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.categoryId,
            'userId': self.userId
        }

    def to_simple_dict(self):
        return {
            'title': self.title,
            'category': self.categoryId,
        }

    def to_dict_with_cards(self):
        return {card.id: {card.to_dict()} for card in self.cards}
