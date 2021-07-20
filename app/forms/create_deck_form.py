from flask_wtf import FlaskForm
from wtforms import StringField, SelectField
from wtforms.ext.sqlalchemy.fields import QuerySelectField
from wtforms.validators import DataRequired
from app.models import Category


class DeckForm(FlaskForm):
    # categories = Category.query.order_by(Category.name).all()
    title = StringField("Title", validators=[DataRequired()])
    category = QuerySelectField(query_factory=lambda: Category.query.all())
