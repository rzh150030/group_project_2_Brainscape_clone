from .db import db


class Card(db.Model):
    __tablename__ = 'cards'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(20), nullable=False)
    answer = db.Column(db.String(20), nullable=False)
    deckId = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)

    deck = db.relationship('Deck', back_populates='card')
