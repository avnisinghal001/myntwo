import PageHeader from '@/components/layout/PageHeader';
import { AddCategoryDialog } from '@/components/taxonomy/AddCategoryDialog';
import { CategoryTree, type TaxonomyCategory } from '@/components/taxonomy/CategoryTree';
import { TagTable, type TaxonomyTag } from '@/components/taxonomy/TagTable';

const categories: TaxonomyCategory[] = [
  { name: 'Women', productCount: 4820, subcategories: [{ name: 'Dresses', productCount: 1240 }, { name: 'Tops', productCount: 1128 }, { name: 'Footwear', productCount: 892 }] },
  { name: 'Men', productCount: 3946, subcategories: [{ name: 'T-Shirts', productCount: 1120 }, { name: 'Shirts', productCount: 864 }, { name: 'Footwear', productCount: 740 }] },
  { name: 'Kids', productCount: 1734, subcategories: [{ name: 'Boys Clothing', productCount: 821 }, { name: 'Girls Clothing', productCount: 756 }] },
  { name: 'Home & Living', productCount: 1182, subcategories: [{ name: 'Furnishing', productCount: 514 }, { name: 'Decor', productCount: 338 }] },
];

const brands: TaxonomyTag[] = [
  { id: 'brand-1', name: 'Roadster', description: 'Casual clothing and footwear', productCount: 842 },
  { id: 'brand-2', name: 'Mango', description: 'Contemporary women’s fashion', productCount: 614 },
  { id: 'brand-3', name: 'DressBerry', description: 'Women’s fashion and accessories', productCount: 489 },
  { id: 'brand-4', name: 'WROGN', description: 'Men’s casual and streetwear', productCount: 378 },
];

const colorFamilies: TaxonomyTag[] = [
  { id: 'color-1', name: 'Neutrals', description: 'Black, white, beige, grey and brown', productCount: 2936 },
  { id: 'color-2', name: 'Blues', description: 'Navy, sky blue, teal and denim', productCount: 1864 },
  { id: 'color-3', name: 'Reds & Pinks', description: 'Red, maroon, coral and pink tones', productCount: 1430 },
  { id: 'color-4', name: 'Greens', description: 'Olive, mint, emerald and forest green', productCount: 927 },
];

const occasionTags: TaxonomyTag[] = [
  { id: 'occasion-1', name: 'Casual', description: 'Everyday, relaxed styling', productCount: 3852 },
  { id: 'occasion-2', name: 'Workwear', description: 'Office-ready essentials', productCount: 1108 },
  { id: 'occasion-3', name: 'Party', description: 'Evening and celebration looks', productCount: 894 },
];

const festivalTags: TaxonomyTag[] = [
  { id: 'festival-1', name: 'Diwali', description: 'Festive ethnic and occasion wear', productCount: 582 },
  { id: 'festival-2', name: 'Eid', description: 'Traditional and elevated styles', productCount: 348 },
  { id: 'festival-3', name: 'Wedding Season', description: 'Wedding guest and celebration looks', productCount: 716 },
];

const styleTags: TaxonomyTag[] = [
  { id: 'style-1', name: 'Minimal', description: 'Clean silhouettes and neutral palettes', productCount: 1254 },
  { id: 'style-2', name: 'Bohemian', description: 'Prints, textures and relaxed layers', productCount: 680 },
  { id: 'style-3', name: 'Streetwear', description: 'Contemporary casual and oversized fits', productCount: 934 },
];

export default function TaxonomyPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Taxonomy Management" subtitle="Organize the categories and tags used across your catalogue." actions={<AddCategoryDialog />} />
      <div className="grid gap-6 xl:grid-cols-[320px_minmax(0,1fr)]">
        <CategoryTree categories={categories} />
        <div className="space-y-6">
          <TagTable title="Brands" description="Approved brands available for product mapping." tags={brands} />
          <div className="grid gap-6 2xl:grid-cols-2"><TagTable title="Color Families" description="Grouped color values for consistent filtering." tags={colorFamilies} /><TagTable title="Occasion Tags" description="Customer-facing occasion labels." tags={occasionTags} /></div>
          <div className="grid gap-6 2xl:grid-cols-2"><TagTable title="Festival Tags" description="Seasonal and festival collection labels." tags={festivalTags} /><TagTable title="Style Tags" description="Style descriptors for discovery and curation." tags={styleTags} /></div>
        </div>
      </div>
    </div>
  );
}
