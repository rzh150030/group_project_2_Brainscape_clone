from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Deck

deck_routes = Blueprint('decks', __name__)


@deck_routes.route("/<int:id>")
def decks(id):
    if current_user.id == id:
        decks = Deck.query.get(id).all()

    return {'decks': [deck.to_dict() for deck in decks]}
