from fastapi import APIRouter

from app.api.v1.endpoints.product import router as product_router
from app.api.v1.endpoints.upload import router as upload_router
from app.api.v1.endpoints.dashboard import router as dashboard_router
from app.api.v1.endpoints.home import router as home_router
from app.api.v1.endpoints.filter import router as filter_router

router = APIRouter()

router.include_router(product_router)
router.include_router(upload_router)
router.include_router(dashboard_router)
router.include_router(home_router)
router.include_router(filter_router)


@router.get("/health", tags=["Health"])
async def health():
    return {
        "status": "ok",
        "message": "Backend is running"
    }


@router.get("/version", tags=["Health"])
async def version():
    return {
        "app": "MYNTWO Backend",
        "version": "v1"
    }