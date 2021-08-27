from flask import Blueprint
from app.models import Deck

search_routes = Blueprint('search', __name__)


# Search for decks by title
@search_routes.route("/<string:name>")
def search_decks(name):
    decks = Deck.query.filter(Deck.title.like(name + "%")).all()
    print(decks)
