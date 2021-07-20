from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Deck, Category
from app.forms import DeckForm

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
@deck_routes.route("/", methods=["POST"])
@login_required
def create_deck():
    form = DeckForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        deck = Deck()
        form.populate_obj(deck)
        deck.userId = current_user.id
        db.session.add(deck)
        db.session.commit()
        return deck.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}

# Delete deck
@deck_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_deck(id):
    deck = Deck.query.get(id)
    if deck.userId == current_user.id:
        db.session.delete(deck)
        db.session.commit()
        return deck.to_dict()
    return {"errors": ["Unauthorized"]}

    

