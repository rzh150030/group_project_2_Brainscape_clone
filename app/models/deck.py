from .db import db


class Deck(db.Model):
    __tablename__ = 'decks'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False, unique=True)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    # created_at = db.Column(db.DateTime, server_default=db.func.now())
    # updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    category = db.relationship('Category', back_populates='deck')
    card = db.relationship('Card', back_populates='deck')
    user = db.relationship("User", back_populates="deck")

    

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.categoryId,
            'userId': self.userId
        }
