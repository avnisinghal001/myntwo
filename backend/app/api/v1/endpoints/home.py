from fastapi import APIRouter

from app.services.home_service import home_service

router = APIRouter(
    prefix="/home",
    tags=["Home"]
)


@router.get("")
async def get_home():

    return await home_service.get_home()