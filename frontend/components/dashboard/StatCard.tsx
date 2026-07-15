'use client';

import { FC, ReactNode } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

type Props = {
  title: string;
  value: string | number;
  icon?: ReactNode;
  delta?: string; // e.g. +3.4%
};

export const StatCard: FC<Props> = ({ title, value, icon, delta }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-gray-500 uppercase tracking-wide">{title}</div>
          <div className="mt-2 text-2xl font-semibold text-gray-900">{value}</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="w-10 h-10 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center">{icon}</div>
          {delta ? (
            <div className="text-xs text-green-600 flex items-center gap-1">
              <ArrowUpRight className="w-3 h-3" /> {delta}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
