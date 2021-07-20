from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Deck, Card, Category
from app.forms import CardForm

card_routes = Blueprint('cards', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Grab all of the cards belonging to this deck
@card_routes.route('/deck/<int:id>')
def cards(id):
    deck = Deck.query.get(id)
    return deck.to_dict_with_cards()


# Create card
@card_routes.route('/deck/<int:id>/create', methods=["POST"])
@login_required
def create_card(id):
    form = CardForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        card = Card()
        form.populate_obj(card)
        card.deckId = id
        db.session.add(card)
        db.session.commit()
        return card.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}


# Delete card
@card_routes.route('/deck/<int:id>/', methods=["DELETE"])
@login_required
def delete_card(id):
    card = Card.query.get(id)
