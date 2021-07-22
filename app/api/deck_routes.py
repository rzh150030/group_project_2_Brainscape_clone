from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Deck, Category, Card
from app.forms import DeckForm, CardForm

deck_routes = Blueprint('decks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Grab a specific deck
@deck_routes.route("/<int:id>")
def decks(id):
    deck = Deck.query.get(id)

    return {"deck": deck.to_dict()}


# Grab decks based on categories
@deck_routes.route("/category/<string:category>")
def cat_decks(category):
    found_category = Category.query.filter_by(name=f"{category}").first()

    return found_category.to_dict_with_decks()


# Grab decks based on current user
@deck_routes.route("/user/<int:id>")
@login_required
def user_decks(id):
    if id == current_user.id:
        decks = Deck.query.filter_by(userId=f"{current_user.id}").all()
        return {"decks": [deck.to_dict() for deck in decks]}
    return {"errors": ["Unauthorized"]}


# Create deck
@deck_routes.route("/create", methods=["POST"])
@login_required
def create_deck():
    form = DeckForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        deck = Deck( title=form.data["title"], categoryId=int(form.data["category"]), userId=current_user.id )
        db.session.add(deck)
        db.session.commit()
        return {"deck": deck.to_dict()}

    return {"errors": validation_errors_to_error_messages(form.errors)}


# Delete deck
@deck_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_deck(id):
    deck = Deck.query.get(id)
    if deck.userId == current_user.id:
        db.session.delete(deck)
        db.session.commit()
        return {"deck": deck.to_dict()}
    return {"errors": ["Unauthorized"]}


# Frontend sends data, data should contain cards that exists when saved
# On backend route, compare and contrast database data to the ones given by the frontend
#  - Data card id given = 0 is a card to create
#  - Data cards ids left over get deleted
#  - Data card id that matches is edited
# Send back some response when done

@deck_routes.route("/<int:id>", methods=["PATCH"])
@login_required
def update_deck(id):
    deck = Deck.query.get(id)
    cards_in_table = deck.to_dict_with_cards()
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

        return {"deck": deck.to_dict()}

    return {"errors": ["Unauthorized"]}
