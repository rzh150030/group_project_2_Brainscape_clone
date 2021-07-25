from flask import Blueprint
from flask_login import login_required
import requests

quotes_routes = Blueprint('quote', __name__)



# Grab quotes from Zenquotes
@quotes_routes.route("/")
# @login_required
def get_my_quotes():
    r = requests.get("https://zenquotes.io/api/quotes/")
    # convert plain text response to string
    r = str(r.text)

    # remove opening and closing brackets from beginning and end of string
    r = r.strip('][')

    # replace "}," with "}\}, " to allow for easy splitting in next step
    r = r.replace("},", "}\}, ")

    # split the entire string on the following character sequence:  "\}, "
    r = r.split("\}, ")

    quotes = { i: {"q": eval(r[i])["q"], "a": eval(r[i])["a"]} for i in range(len(r)) }

    return quotes
