from typing import List, Optional

from pydantic import BaseModel


class ProductCreate(BaseModel):
    p_id: str
    name: str
    price: float

    colour: str
    brand: str
    category: str

    img: str

    ratingCount: int = 0
    avg_rating: float = 0

    description: str

    p_attributes: List[str]


class ProductUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None

    colour: Optional[str] = None
    brand: Optional[str] = None
    category: Optional[str] = None

    img: Optional[str] = None

    ratingCount: Optional[int] = None
    avg_rating: Optional[float] = None

    description: Optional[str] = None

    p_attributes: Optional[List[str]] = None

    status: Optional[str] = None

    qualityScore: Optional[float] = None