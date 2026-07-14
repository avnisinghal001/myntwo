'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Box,
  UploadCloud,
  Clock,
  XCircle,
  Layers,
  Settings as SettingsIcon,
  Menu,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { navItems } from '@/components/navigation/Navigation';

const iconMap: Record<string, any> = {
  Home,
  Box,
  UploadCloud,
  Clock,
  XCircle,
  Layers,
  Settings: SettingsIcon
};

export const Sidebar: FC = () => {
  const pathname = usePathname() || '';
  const [collapsed, setCollapsed] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className={`bg-white border-r border-gray-100 ${collapsed ? 'w-20' : 'w-64'} transition-width duration-200 flex flex-col h-screen fixed md:static left-0 top-0 z-30` }>
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-pink-100 flex items-center justify-center text-pink-600 font-bold">MS</div>
          {!collapsed && <div className="text-sm font-semibold text-gray-800">Myntra SUTRA Admin</div>}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="toggle" className="p-1 rounded hover:bg-gray-50" onClick={() => setCollapsed(s => !s)}>
            {collapsed ? <ChevronsRight className="w-5 h-5 text-gray-600" /> : <ChevronsLeft className="w-5 h-5 text-gray-600" />}
          </button>
          <button className="md:hidden p-1 rounded hover:bg-gray-50" onClick={() => setOpenMobile(s => !s)} aria-label="menu">
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {openMobile && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-20" onClick={() => setOpenMobile(false)} />
      )}

      <nav className={`flex-1 overflow-y-auto p-2 ${openMobile ? 'block absolute left-0 top-16 w-64 z-30' : 'block'}`}>
        <ul className="space-y-1">
          {navItems.map(item => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Home;
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className={`group flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 ${active ? 'bg-white shadow-sm ring-1 ring-pink-200' : ''}`}>
                  <Icon className={`w-5 h-5 ${active ? 'text-[#FF3F6C]' : 'text-gray-500 group-hover:text-[#FF3F6C]'}`} />
                  {!collapsed && <span className={`text-sm ${active ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>{item.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-100">
        {!collapsed && (
          <div className="text-xs text-gray-500">© Myntra SUTRA</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
