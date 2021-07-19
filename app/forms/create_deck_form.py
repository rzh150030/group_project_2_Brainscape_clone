from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired
from app.models import Category


class DeckForm(FlaskForm):
    categories = Category.query.all()
    title = StringField("Title", validators=[DataRequired()])
    category = SelectField("Category", choices=[f"{category.name}" for category in categories])
