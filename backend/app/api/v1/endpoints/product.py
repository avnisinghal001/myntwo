from fastapi import APIRouter, HTTPException

from app.schemas.product import ProductCreate, ProductUpdate
from app.services.product_service import product_service

router = APIRouter(prefix="/products", tags=["Products"])


@router.post("")
async def create_product(product: ProductCreate):
    return await product_service.create_product(product)


@router.get("")
async def get_products(
    page: int = 1,
    limit: int = 12,
    search: str | None = None,
    brand: str | None = None,
    category: str | None = None,
    colour: str | None = None,
    min_price: float | None = None,
    max_price: float | None = None,
    sort_by: str = "createdAt",
    order: str = "desc",
):

    return await product_service.get_products(
        page,
        limit,
        search,
        brand,
        category,
        colour,
        min_price,
        max_price,
        sort_by,
        order,
    )
@router.get("/search/suggestions")
async def search_suggestions(q: str):

    return await product_service.search_suggestions(q)

@router.get("/{product_id}/related")
async def related_products(product_id: str):

    return await product_service.get_related_products(product_id)

@router.get("/{product_id}")
async def get_product(product_id: str):

    product = await product_service.get_product(product_id)

    if not product:
        raise HTTPException(404, "Product not found")

    return product


@router.put("/{product_id}")
async def update_product(product_id: str, data: ProductUpdate):

    product = await product_service.update_product(product_id, data)

    if not product:
        raise HTTPException(404, "Product not found")

    return product


@router.delete("/{product_id}")
async def delete_product(product_id: str):

    deleted = await product_service.delete_product(product_id)

    if not deleted:
        raise HTTPException(404, "Product not found")

    return {
        "message": "Deleted Successfully"
    }