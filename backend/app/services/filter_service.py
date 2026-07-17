from app.models.product import Product


class FilterService:

    async def get_filters(self):

        brands = await Product.distinct("brand")
        categories = await Product.distinct("category")
        colours = await Product.distinct("colour")

        # Extract sizes from p_attributes
        size_set = set()

        products = await Product.find_all().to_list()

        for product in products:

            attrs = getattr(product, "p_attributes", [])

            if not attrs:
                continue

            for attr in attrs:

                if isinstance(attr, str):

                    value = attr.strip().upper()

                    if value in [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "XL",
                        "XXL",
                    ]:
                        size_set.add(value)

        return {
            "brands": sorted([b for b in brands if b]),
            "categories": sorted([c for c in categories if c]),
            "colours": sorted([c for c in colours if c]),
            "sizes": sorted(list(size_set))
        }


filter_service = FilterService()