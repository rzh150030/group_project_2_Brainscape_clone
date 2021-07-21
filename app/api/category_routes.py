from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import db, Category

category_routes = Blueprint('categories', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@category_routes.route("/")
def get_categories():
    categories = Category.query.all()
    return {"categories": [cat.to_dict() for cat in categories]}
