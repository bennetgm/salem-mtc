

import CalendarMonthView from "@/components/CalendarMonthView";
import { getParishCalendarEvents } from "@/lib/calendar-feed";

export const dynamic = "force-dynamic";

export default async function CalendarPage() {
  const events = await getParishCalendarEvents();

  return (
    <div className="mx-auto w-full max-w-[1800px] px-4 pb-20 pt-28 sm:px-6 lg:px-12 lg:pt-36">
      <section className="mb-12">
        <CalendarMonthView events={events} />
      </section>
    </div>
  );
}
