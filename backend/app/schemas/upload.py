from pydantic import BaseModel


class UploadResponse(BaseModel):
    inserted: int
    skipped: int
    failed: int