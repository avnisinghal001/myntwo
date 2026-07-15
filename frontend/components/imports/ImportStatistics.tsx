type ImportStatisticsProps = {
  total: number;
  successful: number;
  failed: number;
};

const numberFormatter = new Intl.NumberFormat('en-IN');

export function ImportStatistics({ total, successful, failed }: ImportStatisticsProps) {
  const successRate = ((successful / total) * 100).toFixed(1);
  const failureRate = ((failed / total) * 100).toFixed(1);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-base font-semibold text-gray-900">Import statistics</h3>
        <p className="mt-1 text-sm text-gray-500">Live snapshot of this import run.</p>
      </div>

      <dl className="mt-6 space-y-5">
        <Statistic label="Success rate" value={`${successRate}%`} barClass="bg-emerald-500" percentage={Number(successRate)} />
        <Statistic label="Failure rate" value={`${failureRate}%`} barClass="bg-rose-500" percentage={Number(failureRate)} />
        <div className="flex items-center justify-between border-t border-gray-100 pt-5 text-sm">
          <dt className="text-gray-500">Products in this file</dt>
          <dd className="font-semibold text-gray-900">{numberFormatter.format(total)}</dd>
        </div>
      </dl>
    </section>
  );
}

function Statistic({ label, value, percentage, barClass }: { label: string; value: string; percentage: number; barClass: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <dt className="text-gray-500">{label}</dt>
        <dd className="font-semibold text-gray-900">{value}</dd>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className={`h-full rounded-full ${barClass}`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}
