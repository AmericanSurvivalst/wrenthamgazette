import { getUpcomingEvents } from '@/lib/mock-data';
import { formatEventDate } from '@/lib/utils';
import { NewsletterSignup } from '@/components';

export default function EventsPage() {
  // Get more events for the full page
  const events = getUpcomingEvents(20);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Page Header */}
      <header className="mb-8 pb-6 border-b border-border">
        <h1 className="font-display text-4xl font-bold mb-2">Community Calendar</h1>
        <p className="text-lg text-muted">
          Upcoming events in Wrentham, including town meetings, library programs, sports, and more.
        </p>
      </header>

      {/* Events List */}
      {events.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="card p-6">
              <div className="font-sans-custom text-xs font-semibold uppercase tracking-wide text-accent mb-2">
                {formatEventDate(event.event_date)}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {event.title}
              </h3>
              {event.description && (
                <p className="text-sm text-muted mb-3">{event.description}</p>
              )}
              {event.location && (
                <p className="font-sans-custom text-xs text-muted">
                  📍 {event.location}
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted">
            No upcoming events scheduled. Check back soon!
          </p>
        </div>
      )}

      <NewsletterSignup />

      {/* Submit Event CTA */}
      <div className="mt-10 p-8 bg-highlight rounded text-center">
        <h2 className="font-display text-2xl font-bold mb-3">
          Have an Event to Share?
        </h2>
        <p className="text-muted mb-4">
          Submit your community event to be included in our calendar.
        </p>
        <a
          href="mailto:events@wrenthamgazette.com"
          className="btn-primary inline-block"
        >
          Submit an Event
        </a>
      </div>
    </div>
  );
}
