from fastapi import APIRouter, File, UploadFile

from app.services.upload_service import upload_service

router = APIRouter(prefix="/upload", tags=["Upload"])


@router.post("/csv")
async def upload_csv(file: UploadFile = File(...)):

    return await upload_service.upload_csv(file)