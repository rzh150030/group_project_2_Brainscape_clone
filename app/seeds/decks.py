from app.models import db, Deck


def seed_decks():
    deck1 = Deck(title="Deck 1", categoryId=1, userId=1)
    deck2 = Deck(title="Deck 2", categoryId=1, userId=1)
    deck3 = Deck(title="Deck 3", categoryId=2, userId=2)

    db.session.add(deck1)
    db.session.add(deck2)
    db.session.add(deck3)

    db.session.commit()


def decks_undo():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
