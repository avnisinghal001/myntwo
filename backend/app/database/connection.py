from motor.motor_asyncio import AsyncIOMotorClient
import certifi

from app.core.config import settings

client = AsyncIOMotorClient(
    settings.MONGODB_URI,
    tlsCAFile=certifi.where(),
)

database = client[settings.DATABASE_NAME]