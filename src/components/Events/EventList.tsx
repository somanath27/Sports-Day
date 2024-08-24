import EventCard from "./EventCard";

interface EventListProps {
  events: {
    id: number;
    event_name: string;
    event_category: string;
    start_time: string;
    end_time: string;
  }[];
  onSelect: (id: number) => void;
  selectedEventIds: number[];
  disabledEventIds: number[];
}

const EventList = ({
  events,
  onSelect,
  selectedEventIds,
  disabledEventIds,
}: EventListProps) => {
  return (
    <div className="flex flex-col space-y-4">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSelect={onSelect}
          disabled={
            selectedEventIds.includes(event.id) ||
            selectedEventIds.length >= 3 ||
            disabledEventIds.includes(event.id)
          }
        />
      ))}
    </div>
  );
};

export default EventList;
