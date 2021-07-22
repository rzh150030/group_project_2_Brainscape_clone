from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField
from wtforms.ext.sqlalchemy.fields import QuerySelectField
from wtforms.validators import DataRequired
from app.models import Category


class DeckForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    # category = QuerySelectField(query_factory=lambda: Category.query.all())
    category = StringField("Category", validators=[DataRequired()])
