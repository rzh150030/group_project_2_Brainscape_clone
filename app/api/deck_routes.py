from flask import Blueprint
from flask_login import login_required, current_user
from flask_migrate import current
from app.models import Deck, Category

deck_routes = Blueprint('decks', __name__)


# Grab a specific deck
@deck_routes.route("/<int:id>")
def decks(id):
    deck = Deck.query.get(id)

    return {"deck": deck.to_dict()}


# Grab decks based on categories
@deck_routes.route("/category/<string:category>")
def cat_decks(category):
    found_category = Category.query.filter_by(name=f"{category}").first()
    decks = Deck.query.filter_by(categoryId=f"{found_category.id}").all()

    return {"decks": [deck.to_dict() for deck in decks]}


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
    
