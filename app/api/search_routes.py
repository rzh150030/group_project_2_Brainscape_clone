from flask import Blueprint
from app.models import Deck, Category, Card

search_routes = Blueprint('search', __name__)


#Search for decks by name
@search_routes.route("/<string:name>")
def search_decks(name):
    decks = Deck.query.filter()
