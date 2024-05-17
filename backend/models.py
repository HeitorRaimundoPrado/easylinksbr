from __init__ import db

class Links(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), unique=True)
    refto = db.Column(db.String(500))
    date_created = db.Column(db.DateTime)
    times_clicked = db.Column(db.Integer, default=0)
    url = db.Column(db.String(100))
