from flask.cli import AppGroup
from .users import seed_users, undo_users
from .category import seed_categories, undo_categories
from .decks import seed_decks, undo_decks

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_categories()
    seed_decks()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_decks()
    # Add other undo functions here
