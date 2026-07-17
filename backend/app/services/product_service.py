from datetime import datetime

from app.models.product import Product
from app.repo.product_repo import product_repository


class ProductService:

    async def create_product(self, data):

        product = Product(**data.model_dump())

        return await product_repository.create(product)

    async def get_products(
        self,
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
    ):

        result = await product_repository.get_products(
            page=page,
            limit=limit,
            search=search,
            brand=brand,
            category=category,
            colour=colour,
            min_price=min_price,
            max_price=max_price,
            sort_by=sort_by,
            order=order,
        )

        return {
            "items": result["items"],
            "total": result["total"],
            "page": page,
            "limit": limit,
            "totalPages": (
                result["total"] + limit - 1
            ) // limit,
        }

    async def get_product(self, product_id):

        return await product_repository.get_by_id(product_id)

    async def update_product(self, product_id, data):

        product = await product_repository.get_by_id(product_id)

        if not product:
            return None

        update_data = data.model_dump(exclude_unset=True)

        for k, v in update_data.items():
            setattr(product, k, v)

        product.updatedAt = datetime.utcnow()

        return await product_repository.save(product)

    async def delete_product(self, product_id):

        product = await product_repository.get_by_id(product_id)

        if not product:
            return False

        await product_repository.delete(product)

        return True
    async def get_related_products(self, product_id):

        return await product_repository.get_related_products(product_id)

    async def search_suggestions(self, query):

        if not query:
            return []

        return await product_repository.search_suggestions(query)


product_service = ProductService()