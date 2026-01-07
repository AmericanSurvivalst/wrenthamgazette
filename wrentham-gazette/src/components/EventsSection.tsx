import Link from 'next/link';
import { Event } from '@/types';
import { formatEventDate } from '@/lib/utils';

interface EventsSectionProps {
  events: Event[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="animate-fade-in">
      <div className="section-header">
        <h2 className="section-title">Upcoming Events</h2>
        <Link href="/events" className="section-link">
          View Calendar
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((event) => (
          <div key={event.id} className="card p-5">
            <div className="font-sans-custom text-[11px] font-semibold uppercase tracking-wide text-accent mb-2">
              {formatEventDate(event.event_date)}
            </div>
            <h4 className="font-display text-base font-semibold mb-1">
              {event.title}
            </h4>
            {event.location && (
              <p className="font-sans-custom text-xs text-muted">
                {event.location}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
