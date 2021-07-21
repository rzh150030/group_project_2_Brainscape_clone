from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Category

category_routes = Blueprint('categories', __name__)


@category_routes.route("/")
def get_categories():
    categories = Category.query.all()
    return {"categories": [cat.to_dict() for cat in categories]}
