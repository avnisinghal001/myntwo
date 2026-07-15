import { CheckCircle2, CircleAlert, LoaderCircle } from 'lucide-react';

export type ImportLog = {
  id: string;
  message: string;
  time: string;
  status: 'success' | 'error' | 'processing';
};

export function ImportLogs({ logs }: { logs: ImportLog[] }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div>
          <h3 className="text-base font-semibold text-gray-900">Recent logs</h3>
          <p className="mt-1 text-sm text-gray-500">Latest events from the import process.</p>
        </div>
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{logs.length} events</span>
      </div>
      <ol className="divide-y divide-gray-100 px-6">
        {logs.map((log) => {
          const status = statusContent[log.status];
          const Icon = status.icon;
          return (
            <li key={log.id} className="flex gap-3 py-4">
              <span className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded-full ${status.tone}`}><Icon className="size-4" /></span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-800">{log.message}</p>
                <p className="mt-1 text-xs text-gray-500">{log.time}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

const statusContent = {
  success: { icon: CheckCircle2, tone: 'bg-emerald-50 text-emerald-600' },
  error: { icon: CircleAlert, tone: 'bg-rose-50 text-rose-600' },
  processing: { icon: LoaderCircle, tone: 'bg-blue-50 text-blue-600' },
};
