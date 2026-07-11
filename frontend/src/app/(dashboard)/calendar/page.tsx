import { Topbar } from "@/components/layout/Topbar";
import { CalendarView } from "@/components/calendar/CalendarView";

export default function CalendarPage() {
  return (
    <div>
      <Topbar title="Calendar" />
      <div className="px-6 pb-16 md:px-10">
        <CalendarView />
      </div>
    </div>
  );
}
