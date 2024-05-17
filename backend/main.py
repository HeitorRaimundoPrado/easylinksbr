from flask import Blueprint, request
import string
import random
import datetime

bp = Blueprint("main", __name__)

@bp.route('/api/link/create')
def create():
    link_to = request.args.get('link')
    link_name = request.args.get('link_name')

    if link_to is None:
        return {'success': 0}, 400

    from models import Links

    if link_name is None:
        link_name = ''

    if link_name is None or link_name == "":
        while True:
            link_exists = Links.query.filter_by(name=link_name).first() 

            if (link_exists is not None and link_exists.date_created - datetime.datetime.utcnow() < datetime.timedelta(days=7)) or link_name=="":
                link_name = ''.join(random.choice(string.ascii_lowercase) for _ in range(6))
                continue

            break


    already_exists = Links.query.filter_by(name=link_name).first()

    if already_exists is not None:
        return {'success': 0, 'error': 'A link with this name already exists'}, 409

    new_link = Links(name=link_name, refto=link_to, date_created=datetime.datetime.utcnow(), url=link_name)

    from __init__ import db

    db.session.add(new_link)
    db.session.commit()

    return {'success': 1, 'link_name': link_name}

@bp.route('/api/link/get/<link>')
def redirect_to_link(link):
    from models import Links
    link = Links.query.filter_by(name=link).first()
    if not link:
        return { "message": "no such link" }, 404
    
    link.times_clicked += 1

    from __init__ import db
    db.session.commit()

    return {
        "link": link.refto
    }

@bp.route('/api/times-clicked')
def get_times_clicked():
    url = request.args.get("url").split('/') #type: ignore
    url = url[len(url) - 1]

    from models import Links
    link = Links.query.filter_by(name=url).first()
    if not link:
        return {
            "message": "no such link"
        }, 404

    return {
        "clicked": link.times_clicked
    }
