'use client';

import StatCard from '../../../components/dashboard/StatCard';
import QuickAction from '../../../components/dashboard/QuickAction';
import RecentActivity from '../../../components/dashboard/RecentActivity';
import { Bar, BarChart, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import {
  Box,
  CheckCircle,
  XCircle,
  Clock,
  Image as ImageIcon,
  List,
  Star,
  BarChart2,
  UploadCloud,
  Layers
} from 'lucide-react';

const categoryData = [
  { category: 'Women', products: 4820 },
  { category: 'Men', products: 3946 },
  { category: 'Kids', products: 1734 },
  { category: 'Home', products: 1182 },
];

const brandData = [
  { name: 'Roadster', value: 842, color: '#2563eb' },
  { name: 'Mango', value: 614, color: '#7c3aed' },
  { name: 'DressBerry', value: 489, color: '#db2777' },
  { name: 'WROGN', value: 378, color: '#ea580c' },
  { name: 'Others', value: 1015, color: '#94a3b8' },
];

const statusData = [
  { status: 'Approved', products: 9102, fill: '#10b981' },
  { status: 'Pending', products: 2126, fill: '#f59e0b' },
  { status: 'Rejected', products: 1254, fill: '#f43f5e' },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome back, Admin</h2>
            <p className="text-sm text-gray-600 mt-1">Manage your fashion catalogue.</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <StatCard title="Total Products" value={"12,482"} icon={<Box className="w-5 h-5" />} delta={"2.3%"} />
        <StatCard title="Approved Products" value={"9,102"} icon={<CheckCircle className="w-5 h-5" />} delta={"1.1%"} />
        <StatCard title="Rejected Products" value={"1,254"} icon={<XCircle className="w-5 h-5" />} delta={"-0.4%"} />
        <StatCard title="Pending Products" value={"2,126"} icon={<Clock className="w-5 h-5" />} delta={"0.8%"} />
        <StatCard title="Missing Images" value={"342"} icon={<ImageIcon className="w-5 h-5" />} />
        <StatCard title="Missing Attributes" value={"1,020"} icon={<List className="w-5 h-5" />} />
        <StatCard title="Average Rating" value={"4.3"} icon={<Star className="w-5 h-5" />} />
        <StatCard title="Avg Quality Score" value={"87%"} icon={<BarChart2 className="w-5 h-5" />} />
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <DashboardChart title="Category Distribution" subtitle="Products grouped by primary category">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryData} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
              <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: 10, border: '1px solid #e2e8f0' }} formatter={(value) => [Number(value).toLocaleString('en-IN'), 'Products']} />
              <Bar dataKey="products" fill="#2563eb" radius={[6, 6, 0, 0]} maxBarSize={48} />
            </BarChart>
          </ResponsiveContainer>
        </DashboardChart>

        <DashboardChart title="Brand Distribution" subtitle="Leading brands in the current catalogue">
          <div className="flex h-full flex-col sm:flex-row sm:items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart><Pie data={brandData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={58} outerRadius={82} paddingAngle={3}>{brandData.map((brand) => <Cell key={brand.name} fill={brand.color} />)}</Pie><Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #e2e8f0' }} formatter={(value) => [Number(value).toLocaleString('en-IN'), 'Products']} /></PieChart>
            </ResponsiveContainer>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:block sm:min-w-28 sm:space-y-2">
              {brandData.map((brand) => <li key={brand.name} className="flex items-center gap-2 text-slate-600"><span className="size-2 rounded-full" style={{ backgroundColor: brand.color }} />{brand.name}</li>)}
            </ul>
          </div>
        </DashboardChart>

        <DashboardChart title="Product Status" subtitle="Current approval state across all products" className="xl:col-span-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statusData} layout="vertical" margin={{ top: 4, right: 16, left: 16, bottom: 0 }}>
              <XAxis type="number" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis type="category" dataKey="status" width={68} axisLine={false} tickLine={false} tick={{ fill: '#475569', fontSize: 12 }} />
              <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: 10, border: '1px solid #e2e8f0' }} formatter={(value) => [Number(value).toLocaleString('en-IN'), 'Products']} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
              <Bar dataKey="products" name="Products" radius={[0, 6, 6, 0]}>{statusData.map((status) => <Cell key={status.status} fill={status.fill} />)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </DashboardChart>
      </div>

      {/* Quick Actions + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <QuickAction title="Upload Dataset" subtitle="Upload CSVs and images" icon={<UploadCloud className="w-5 h-5" />} />
          <QuickAction title="View Products" subtitle="Browse product list" icon={<Box className="w-5 h-5" />} />
          <QuickAction title="Manage Taxonomy" subtitle="Edit categories & attributes" icon={<Layers className="w-5 h-5" />} />
          <QuickAction title="Rejected Products" subtitle="Review and resolve" icon={<XCircle className="w-5 h-5" />} />
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

function DashboardChart({ title, subtitle, children, className = '' }: { title: string; subtitle: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-xl border bg-card p-5 shadow-sm ${className}`}>
      <div><h3 className="font-semibold text-foreground">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{subtitle}</p></div>
      <div className="mt-4 h-64">{children}</div>
    </section>
  );
}
