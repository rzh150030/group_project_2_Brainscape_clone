from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Deck, Category

deck_routes = Blueprint('decks', __name__)


# Grab a specific deck
@deck_routes.route("/<int:id>")
def decks(id):
    deck = Deck.query.get(id)

    return {"deck": deck.to_dict()}


# Grab decks based on categories
@deck_routes.route("/<string:category>")
def cat_decks(category):
    found_category = Category.query.filter_by(name=f"{category}").first()
    decks = Deck.query.filter_by(categoryId=f"{found_category.id}").all()

    return {"decks": [deck.to_dict() for deck in decks]}
