export type NavItem = {
  title: string;
  href: string;
  icon: string; // icon name from lucide-react; resolved where used
};

export const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/admin/dashboard', icon: 'Home' },
  { title: 'Products', href: '/admin/products', icon: 'Box' },
  { title: 'Upload Dataset', href: '/admin/upload', icon: 'UploadCloud' },
  { title: 'Import Progress', href: '/admin/imports', icon: 'Clock' },
  { title: 'Rejected Products', href: '/admin/rejected', icon: 'XCircle' },
  { title: 'Taxonomy', href: '/admin/taxonomy', icon: 'Layers' },
  { title: 'Settings', href: '/admin/settings', icon: 'Settings' }
];
