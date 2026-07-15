export type NavItem = {
  title: string;
  href: string;
  icon: string; // icon name from lucide-react; resolved where used
};

export const navItems: NavItem[] = [
  { title: 'Dashboard', href: '/dashboard', icon: 'Home' },
  { title: 'Products', href: '/products', icon: 'Box' },
  { title: 'Upload Dataset', href: '/upload', icon: 'UploadCloud' },
  { title: 'Import Progress', href: '/imports', icon: 'Clock' },
  { title: 'Rejected Products', href: '/rejected', icon: 'XCircle' },
  { title: 'Taxonomy', href: '/taxonomy', icon: 'Layers' },
  { title: 'Settings', href: '/settings', icon: 'Settings' }
];
