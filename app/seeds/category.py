from app.models import db, Category


def seed_categories():

    sql = Category(name="SQL")
    cms = Category(name="CMS")
    dev_ops = Category(name="Dev Ops")
    docker = Category(name="Docker")
    html = Category(name="HTML")
    javascript = Category(name="JavaScript")
    kubernetes = Category(name="Kubernetes")
    linux = Category(name="Linux")
    php = Category(name="PHP")


    db.session.add(sql)
    db.session.add(cms)
    db.session.add(dev_ops)
    db.session.add(docker)
    db.session.add(html)
    db.session.add(javascript)
    db.session.add(kubernetes)
    db.session.add(linux)
    db.session.add(php)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
