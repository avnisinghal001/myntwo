from fastapi import APIRouter

from app.services.filter_service import filter_service

router = APIRouter(
    prefix="/filters",
    tags=["Filters"]
)


@router.get("")
async def get_filters():

    return await filter_service.get_filters()