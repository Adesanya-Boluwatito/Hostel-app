from Flask import Blueprint

bp = Blueprint('favourites', __name__)

from favourites import routes