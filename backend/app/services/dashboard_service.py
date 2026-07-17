from app.models.product import Product


class DashboardService:

    async def get_stats(self):

        total = await Product.find_all().count()

        approved = await Product.find(
            Product.status == "approved"
        ).count()

        pending = await Product.find(
            Product.status == "pending"
        ).count()

        rejected = await Product.find(
            Product.status == "rejected"
        ).count()

        avg_price = 0

        products = await Product.find_all().to_list()

        if products:
            avg_price = round(
                sum(p.price for p in products) / len(products),
                2
            )

        return {
            "totalProducts": total,
            "approvedProducts": approved,
            "pendingProducts": pending,
            "rejectedProducts": rejected,
            "averagePrice": avg_price
        }


dashboard_service = DashboardService()