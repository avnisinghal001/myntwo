from fastapi import APIRouter

from app.services.dashboard_service import dashboard_service

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
async def dashboard_stats():

    return await dashboard_service.get_stats()