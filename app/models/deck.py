from .db import db


class Deck(db.Model):
    __tablename__ = 'decks'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False, unique=True)
    _categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    _userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    category = db.relationship('Category', back_populates='deck')
    card = db.relationship('Card', back_populates='deck')
    user = db.relationship("User", back_populates="deck")

    @property
    def categoryId(self):
        return self._categoryId

    @categoryId.setter
    def categoryId(self, id):
        self._categoryId = id

    @property
    def userId(self):
        return self._userId

    @userId.setter
    def userId(self, id):
        self._userId = id

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'category': self.categoryId,
            'userId': self.userId
        }
