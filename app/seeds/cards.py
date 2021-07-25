from app.models import db, Card


def seed_cards():
    card1 = Card(question="How to protect special characters in a query string?", answer='urlencode()', deckId=1)
    card2 = Card(question="Question 2", answer='Answer 2', deckId=1)
    card3 = Card(question="Question 3", answer='Answer 3', deckId=2)

    db.session.add(card1)
    db.session.add(card2)
    db.session.add(card3)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
