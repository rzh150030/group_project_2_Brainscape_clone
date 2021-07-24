from app.models import db, Deck


def seed_decks():
    deck1 = Deck(title="Java Questions", categoryId=1, userId=1)
    deck2 = Deck(title="More Java Questions", categoryId=1, userId=1)
    deck3 = Deck(title="Python Questions", categoryId=2, userId=2)
    deck2 = Deck(title="Docker Questions", categoryId=5, userId=1)

    db.session.add(deck1)
    db.session.add(deck2)
    db.session.add(deck3)

    db.session.commit()


def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()
