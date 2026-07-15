import PageHeader from '@/components/layout/PageHeader';
import { ImportLogs, type ImportLog } from '@/components/imports/ImportLogs';
import { ImportProgressCard } from '@/components/imports/ImportProgressCard';
import { ImportStatistics } from '@/components/imports/ImportStatistics';

const importData = {
  total: 12482,
  processed: 8421,
  successful: 8164,
  failed: 257,
  remainingTime: '8 min',
};

const recentLogs: ImportLog[] = [
  { id: '1', message: 'Processed 250 products from batch #34.', time: 'Just now', status: 'processing' },
  { id: '2', message: 'Image references validated for batch #33.', time: '2 minutes ago', status: 'success' },
  { id: '3', message: '14 products skipped because their category mapping is missing.', time: '5 minutes ago', status: 'error' },
  { id: '4', message: 'Processed 250 products from batch #32.', time: '7 minutes ago', status: 'success' },
  { id: '5', message: 'Import started for myntra-catalogue-july-2026.csv.', time: '16 minutes ago', status: 'success' },
];

export default function ImportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Import Progress" subtitle="Track the status and results of your catalogue import." />
      <ImportProgressCard {...importData} />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <ImportLogs logs={recentLogs} />
        <ImportStatistics total={importData.total} successful={importData.successful} failed={importData.failed} />
      </div>
    </div>
  );
}
