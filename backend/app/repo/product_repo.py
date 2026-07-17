from beanie.operators import RegEx

from app.models.product import Product


class ProductRepository:

    async def create(self, product):
        return await product.insert()

    async def get_by_id(self, product_id):
        return await Product.get(product_id)

    async def save(self, product):
        return await product.save()

    async def delete(self, product):
        await product.delete()
        async def get_related_products(self, product_id: str):

            product = await Product.get(product_id)

            if not product:
                return []

            related = await (
                Product.find(
                    Product.category == product.category,
                    Product.id != product.id
                )
                .limit(8)
                .to_list()
            )

            if len(related) < 8:

                brand_products = await (
                    Product.find(
                        Product.brand == product.brand,
                        Product.id != product.id
                    )
                    .limit(8 - len(related))
                    .to_list()
                )

                existing = {str(p.id) for p in related}

                for p in brand_products:
                    if str(p.id) not in existing:
                        related.append(p)

            return related

    async def get_products(
        self,
        page: int,
        limit: int,
        search: str | None = None,
        brand: str | None = None,
        category: str | None = None,
        colour: str | None = None,
        min_price: float | None = None,
        max_price: float | None = None,
        sort_by: str = "createdAt",
        order: str = "desc",
    ):

        filters = []

        if search:
            filters.append(
                RegEx(
                    Product.name,
                    pattern=search,
                    options="i"
                )
            )

        if brand:
            filters.append(Product.brand == brand)

        if category:
            filters.append(Product.category == category)

        if colour:
            filters.append(Product.colour == colour)

        if min_price is not None:
            filters.append(Product.price >= min_price)

        if max_price is not None:
            filters.append(Product.price <= max_price)

        query = Product.find(*filters)

        total = await query.count()

        sort_field = getattr(Product, sort_by, Product.createdAt)

        if order == "desc":
            query = query.sort(-sort_field)
        else:
            query = query.sort(sort_field)

        items = await (
            query
            .skip((page - 1) * limit)
            .limit(limit)
            .to_list()
        )

        return {
            "items": items,
            "total": total
        }

    async def search_suggestions(self, query: str):

        products = await (
            Product.find(
                RegEx(
                    Product.name,
                    pattern=query,
                    options="i"
                )
            )
            .limit(10)
            .to_list()
        )

        suggestions = []

        seen = set()

        for product in products:

            if product.name not in seen:
                suggestions.append(product.name)
                seen.add(product.name)

        return suggestions

    


product_repository = ProductRepository()