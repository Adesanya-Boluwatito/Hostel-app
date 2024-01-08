from app.app import db
from datetime import datetime








class Properties(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.String, db.ForeignKey('realtor.id'),
                         index=True, unique=False)
    description = db.Column(db.Text, index=False, unique=False)
    location = db.Column(db.String, index=True, unique=False)
    address = db.Column(db.String, index=False, unique=False)
    bedrooms = db.Column(db.Integer, index=False, unique=False)
    bathrooms = db.Column(db.Integer, index=False, unique=False)
    category = db.Column(db.String, index=False, unique=False)
    title = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    property_type = db.Column(db.String, index=False, unique=False)
    active = db.Column(db.Boolean, index=False, default=True, unique=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)
    size = db.Column(db.String, index=False, unique=False)



    def get_property_images(self):
        return [image.filename for image in self.images]

    def __repr__(self):
        return f'<Property "{self.id}">'

    def serialize(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "description": self.description,
            "location": self.location,
            "address": self.address,
            "bedrooms": self.bedrooms,
            "bathrooms": self.bathrooms,
            "category": self.category,
            "title": self.title,
            "price": self.price,
            "property_type": self.property_type,
            "active": self.active,
            "date_created": self.date_created,
            "size": self.size,
            "property_images": self.get_property_images(),
        }


class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('property.id'), nullable=False)
    filename = db.Column(db.String(255), nullable=False)

    property = db.relationship('Property', backref=db.backref('images', lazy=True))