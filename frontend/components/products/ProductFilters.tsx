const selectClassName = 'h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto';

export function ProductFilters() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
      <label className="sr-only" htmlFor="category-filter">Filter by category</label>
      <select id="category-filter" className={selectClassName} defaultValue="all">
        <option value="all">All categories</option>
        <option>Women</option><option>Men</option><option>Footwear</option><option>Accessories</option><option>Beauty</option><option>Home</option>
      </select>
      <label className="sr-only" htmlFor="status-filter">Filter by status</label>
      <select id="status-filter" className={selectClassName} defaultValue="all">
        <option value="all">All statuses</option>
        <option>Approved</option><option>Pending</option><option>Rejected</option>
      </select>
      <label className="sr-only" htmlFor="brand-filter">Filter by brand</label>
      <select id="brand-filter" className={selectClassName} defaultValue="all">
        <option value="all">All brands</option>
        <option>Roadster</option><option>Puma</option><option>HIGHLANDER</option><option>Levis</option><option>Anouk</option><option>Nike</option>
      </select>
    </div>
  );
}
