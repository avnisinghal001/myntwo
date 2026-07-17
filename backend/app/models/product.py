from datetime import datetime
from typing import List

from beanie import Document
from pydantic import Field


class Product(Document):
    p_id: str
    name: str
    price: float

    colour: str
    brand: str
    category: str

    img: str

    ratingCount: int = 0
    avg_rating: float = 0.0

    description: str

    p_attributes: List[str] = Field(default_factory=list)

    status: str = "Pending"

    qualityScore: float = 100

    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Settings:
        name = "products"