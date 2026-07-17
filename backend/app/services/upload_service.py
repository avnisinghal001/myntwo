import pandas as pd

from app.models.product import Product


class UploadService:

    async def upload_csv(self, file):

        df = pd.read_csv(file.file)

        inserted = 0
        skipped = 0
        failed = 0

        products = []

        for _, row in df.iterrows():

            try:

                product = Product(
                    p_id=str(row.get("p_id", "")),
                    name=str(row.get("name", "")),
                    price=float(row.get("price", 0)),
                    colour=str(row.get("colour", "")),
                    brand=str(row.get("brand", "")),
                    category=str(row.get("category", "")),
                    img=str(row.get("img", "")),
                    ratingCount=int(row.get("ratingCount", 0)),
                    avg_rating=float(row.get("avg_rating", 0)),
                    description=str(row.get("description", "")),
                    p_attributes=[],
                    status="approved",
                    qualityScore=100,
                )

                products.append(product)

                inserted += 1

            except Exception:
                failed += 1

        if products:
            await Product.insert_many(products)

        return {
            "inserted": inserted,
            "skipped": skipped,
            "failed": failed,
        }


upload_service = UploadService()