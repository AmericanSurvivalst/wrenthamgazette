import Link from 'next/link';
import { PoliceLog } from '@/types';
import { formatLogDate } from '@/lib/utils';

interface PoliceLogSectionProps {
  logs: PoliceLog[];
}

export default function PoliceLogSection({ logs }: PoliceLogSectionProps) {
  return (
    <section className="animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">Police & Fire Log</h2>
        <Link href="/category/police-fire" className="section-link">
          View Full Log →
        </Link>
      </div>

      <div className="bg-highlight border border-border rounded p-6">
        <div className="space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="grid grid-cols-[100px_1fr] gap-4 pb-4 border-b border-border last:border-b-0 last:pb-0 text-sm"
            >
              <div className="font-sans-custom text-xs font-medium text-muted">
                {formatLogDate(log.date, log.time || undefined)}
              </div>
              <div>
                <strong className="text-ink">{log.description.split(' — ')[0]}</strong>
                {log.description.includes(' — ') && (
                  <span className="text-muted">
                    {' '}
                    — {log.description.split(' — ').slice(1).join(' — ')}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
