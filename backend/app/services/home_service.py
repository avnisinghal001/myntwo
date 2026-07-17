from app.models.product import Product


class HomeService:

    async def get_home(self):

        trending = await (
            Product.find(Product.status == "approved")
            .sort(-Product.ratingCount)
            .limit(8)
            .to_list()
        )

        new_arrivals = await (
            Product.find(Product.status == "approved")
            .sort(-Product.createdAt)
            .limit(8)
            .to_list()
        )

        categories = await Product.distinct("category")

        banners = [
            {
                "id": 1,
                "title": "Summer Collection",
                "image": "/banners/banner1.jpg"
            },
            {
                "id": 2,
                "title": "Festive Sale",
                "image": "/banners/banner2.jpg"
            }
        ]

        return {
            "banners": banners,
            "trending": trending,
            "newArrivals": new_arrivals,
            "categories": categories
        }


home_service = HomeService()