from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.ext.sqlalchemy.fields import QuerySelectField
from wtforms.validators import DataRequired
from app.models import Category, Deck, Card


class CardForm(FlaskForm):
    # categories = Category.query.order_by(Category.name).all()
    question = StringField("Question", validators=[DataRequired()])
    answer = StringField("Answer", validators=[DataRequired()])
