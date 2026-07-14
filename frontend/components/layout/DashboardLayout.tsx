'use client';

import { FC, PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { navItems } from '@/components/navigation/Navigation';
import { usePathname } from 'next/navigation';

export const DashboardLayout: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  const pathname = usePathname() || '';

  // Determine title from nav items
  const active = navItems.find(n => pathname.startsWith(n.href));
  const title = active?.title ?? 'Admin';

  // build breadcrumb items
  const segments = pathname.replace(/^\/|\/$/g, '').split('/');
  const crumbs = segments.reduce<{ href: string; label: string }[]>((acc, seg, idx) => {
    const href = '/' + segments.slice(0, idx + 1).join('/');
    acc.push({ href, label: seg.charAt(0).toUpperCase() + seg.slice(1) });
    return acc;
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />

      <div className="md:pl-64">
        <div className="ml-0 md:ml-0">
          <div className="sticky top-0 z-10 bg-transparent">
            <Navbar title={title} breadcrumbItems={crumbs} />
          </div>

          <main className="p-4 md:p-8">
            <div className="max-w-full">
              <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
