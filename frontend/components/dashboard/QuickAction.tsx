'use client';

import { FC, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Props = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
};

export const QuickAction: FC<Props> = ({ title, subtitle, icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-pink-50 text-pink-600 flex items-center justify-center">{icon}</div>
        <div>
          <div className="text-sm font-medium text-gray-900">{title}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
      </div>
      <div>
        <button className="inline-flex items-center gap-2 text-sm text-pink-600 hover:underline">
          Action <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QuickAction;
