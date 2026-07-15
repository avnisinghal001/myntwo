'use client';

import { FC } from 'react';
import { Clock, User, Archive, Edit3, FileText } from 'lucide-react';

type Activity = {
  id: string;
  title: string;
  description?: string;
  time: string;
  icon?: React.ReactNode;
};

const activities: Activity[] = [
  { id: 'a1', title: 'Uploaded dataset "summer-catalog.csv"', time: '2 hours ago', icon: <Archive className="w-5 h-5 text-pink-600" /> },
  { id: 'a2', title: 'Product #1245 approved', time: '5 hours ago', icon: <User className="w-5 h-5 text-green-600" /> },
  { id: 'a3', title: 'Product #1290 rejected', time: '7 hours ago', icon: <FileText className="w-5 h-5 text-red-600" /> },
  { id: 'a4', title: 'Taxonomy updated: "Women > Dresses"', time: '1 day ago', icon: <Edit3 className="w-5 h-5 text-pink-600" /> },
  { id: 'a5', title: 'Missing images found for batch #42', time: '2 days ago', icon: <Clock className="w-5 h-5 text-yellow-600" /> }
];

export const RecentActivity: FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Recent Activity</h3>
      </div>

      <ul className="mt-4 space-y-3">
        {activities.map(a => (
          <li key={a.id} className="flex items-start gap-3">
            <div className="mt-1">{a.icon}</div>
            <div>
              <div className="text-sm text-gray-800">{a.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">{a.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
