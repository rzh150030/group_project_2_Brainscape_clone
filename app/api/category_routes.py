from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Category, Deck

category_routes = Blueprint('categories', __name__)

# Grabs all categories
@category_routes.route("/")
def get_categories():
    categories = Category.query.all()
    return {"categories": [cat.to_dict() for cat in categories]}

# Grab a specific deck's category's name
@category_routes.route("/deck/<int:id>")
def get_category(id):
    deck = Deck.query.get(id)
    return deck.to_dict_category()
