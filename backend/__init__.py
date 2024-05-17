from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()


def create_app():
    app = Flask(__name__)
    
    
    app.config.from_mapping(
        SECRET_KEY=os.getenv('FLASK_EASYLINKSBR_SECRET_KEY'),
        SQLALCHEMY_DATABASE_URI=os.getenv('DATABASE_URL'),
         )

    from flask_cors import CORS
    
    CORS(app, origins=["http://localhost:5000", os.getenv('EASYLINKSBR_FRONTEND_DOMAIN')])

    import models
    
    db.init_app(app)
    
    import main
    app.register_blueprint(main.bp)
    
    with app.app_context():
        db.create_all()


    return app
