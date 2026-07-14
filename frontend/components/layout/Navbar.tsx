'use client';

import { FC, useState } from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';
import { Avatar } from '@/components/common/Avatar';
import Breadcrumb from '@/components/common/Breadcrumb';

type Props = {
  title?: string;
  breadcrumbItems?: { href: string; label: string }[];
};

export const Navbar: FC<Props> = ({ title, breadcrumbItems = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-transparent border-b border-gray-100">
      <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
                {breadcrumbItems.length > 0 && <div className="mt-1"><Breadcrumb items={breadcrumbItems} /></div>}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center bg-white border border-gray-100 rounded-md px-3 py-1 shadow-sm">
              <Search className="w-4 h-4 text-gray-400" />
              <input aria-label="Search" placeholder="Search" className="ml-2 outline-none text-sm text-gray-700" />
            </div>

            <button aria-label="Notifications" className="p-2 rounded hover:bg-gray-50">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>

            <div className="relative">
              <button onClick={() => setOpen(s => !s)} className="flex items-center gap-2 p-1 rounded hover:bg-gray-50">
                <Avatar name="Admin User" />
                <span className="hidden sm:block text-sm text-gray-700">Admin</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg py-2 z-40">
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" href="#">Profile</a>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50" href="#">Settings</a>
                  <a className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50" href="#">Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
