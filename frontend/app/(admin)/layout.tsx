import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';

export const metadata = {
  title: 'Myntra SUTRA Admin'
};

export default function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  // Protected logic (auth) should be added elsewhere. This is a wrapper layout.
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  );
}
