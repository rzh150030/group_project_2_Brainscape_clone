from app.models import db, Card


def seed_cards():
    Jcard1 = Card(question="How to protect special characters in a query string?", answer='urlencode()', deckId=1)
    Jcard2 = Card(question="What is the function to parse a configuration file?", answer='parseini_file()', deckId=1)
    Jcard3 = Card(question="What is the default session time in PHP?", answer='The default session time in php is until the closing of the browser', deckId=1)
    Jcard4 = Card(question="Intensity of a color can be described through", answer='Hue', deckId=1)
    Jcard5 = Card(question="Which cryptographic extension provides generation and verification of digital signatures?", answer='PHP-CloseSSL', deckId=1)

    db.session.add(card1)
    db.session.add(card2)
    db.session.add(card3)

    db.session.commit()


def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()
