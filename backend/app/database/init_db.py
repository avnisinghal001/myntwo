from beanie import init_beanie

from app.database.connection import database
from app.models.product import Product


async def init_db():
    await init_beanie(
        database=database,
        document_models=[
            Product
        ],
    )