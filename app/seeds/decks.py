from app.models import db, Deck


def seed_decks():
    deck1 = Deck(title="Easy SQL Questions", categoryId=1, userId=1)
    deck2 = Deck(title="Medium SQL Questions", categoryId=1, userId=1)
    deck3 = Deck(title="Hard SQL Questions", categoryId=1, userId=1)
    deck4 = Deck(title="Docker Questions", categoryId=5, userId=1)

    db.session.add(deck1)
    db.session.add(deck2)
    db.session.add(deck3)
    db.session.add(deck4)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
