# PBrain
*Developed by Richard Huang, Justin Sung, John Shivers, Gustavo Miranda*

[Live Link](https://pbrain-app.herokuapp.com/)

## Index Links
[Database Schema](https://github.com/rzh150030/group_project_2_Brainscape_clone/wiki/Database-Schema)

[MVP Features List](https://github.com/rzh150030/group_project_2_Brainscape_clone/wiki/MVP-Feature-List)

[User Stories](https://github.com/rzh150030/group_project_2_Brainscape_clone/wiki/User-Stories)

## Overview
PBrain is a clone of Brainscape where users can create decks on topics related to computer science and study them.

## Technologies Used
- Flask
- SQLAlchemy
- PostgreSQL
- WTForms
- React
- Redux
- Alembic

## Current Features
### Create and Deletion of Decks
Logged in users are able to create their own deck of flashcards based on a single subject of computer science and fill them with questions and answers. Cards can be made through decks that the users own.

### Create, Update, and Deletion of Cards
Logged in users can create new cards as well as edit and delete existing cards in a deck. All cards are displayed in a single form and users can edit, create, or delete multiple cards on the form. This was accomplished through the development of a custom logic handling in the backend and formatting frontend data to be suitable for the backend logic. All CRUD functionality for cards was handled in the deck PATCH route.
`def update_deck(id):
    deck = Deck.query.get(id)
    cards_in_table = deck.to_dict_card_check()
    form = CardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = request.json

    if deck.userId == current_user.id:
        for card in data["cards"]:
            if int(card["id"]) == 0:
                card = Card(question=card["question"], answer=card["answer"])
                deck.cards.append(card)
                db.session.add(card)
                db.session.commit()
            elif cards_in_table[int(card["id"])]:
                card_from_table = Card.query.get(int(card["id"]))
                card_from_table.question = card["question"]
                card_from_table.answer = card["answer"]
                del cards_in_table[int(card["id"])]
                db.session.commit()

        for key in cards_in_table.keys():
            card = Card.query.get(key)
            db.session.delete(card)
            db.session.commit()

        return deck.to_dict_with_cards()

    return {"errors": ["Unauthorized"]}`
    
### Studying Decks
Logged in users are able to study decks they own.

### Future Features
- Search decks by categories
- Search bar for searching decks
