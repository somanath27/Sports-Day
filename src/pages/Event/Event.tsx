import { useState, useEffect } from "react";
import EventList from "../../components/Events/EventList";
import SelectedEvents from "../../components/Events/SelectedEvents";
import mockEvents from "../../api/mock.json";

const Event = () => {
  const [selectedEventIds, setSelectedEventIds] = useState<number[]>(() => {
    const saved = localStorage.getItem("selectedEvents");
    return saved ? JSON.parse(saved) : [];
  });
  const [disabledEventIds, setDisabledEventIds] = useState<number[]>([]);

  const handleSelectEvent = (id: number) => {
    setSelectedEventIds((prev) => {
      const updated = [...prev, id];
      localStorage.setItem("selectedEvents", JSON.stringify(updated));
      return updated;
    });
  };

  const handleDeselectEvent = (id: number) => {
    setSelectedEventIds((prev) => {
      const updated = prev.filter((eventId) => eventId !== id);
      localStorage.setItem("selectedEvents", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("selectedEvents", JSON.stringify(selectedEventIds));
  }, [selectedEventIds]);

  useEffect(() => {
    const checkConflicts = () => {
      const selectedEvents = mockEvents.filter((event) =>
        selectedEventIds.includes(event.id)
      );

      const isConflicting = (newEventStart: string, newEventEnd: string) => {
        const newStart = new Date(newEventStart).getTime();
        const newEnd = new Date(newEventEnd).getTime();

        return selectedEvents.some((event) => {
          const eventStart = new Date(event.start_time).getTime();
          const eventEnd = new Date(event.end_time).getTime();
          return newStart < eventEnd && newEnd > eventStart;
        });
      };

      const conflictingEventIds = mockEvents
        .filter((event) => !selectedEventIds.includes(event.id))
        .filter((event) => isConflicting(event.start_time, event.end_time))
        .map((event) => event.id);

      setDisabledEventIds(conflictingEventIds);
    };

    checkConflicts();
  }, [selectedEventIds]);

  const selectedEvents = mockEvents.filter((event) =>
    selectedEventIds.includes(event.id)
  );
  const availableEvents = mockEvents.filter(
    (event) => !selectedEventIds.includes(event.id)
  );

  return (
    <div className="flex flex-row mt-14 gap-6">
      <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-serif mb-6 text-gray-800">All Events</h2>
        <div className="grid grid-cols-1 gap-6">
          <EventList
            events={availableEvents}
            onSelect={handleSelectEvent}
            selectedEventIds={selectedEventIds}
            disabledEventIds={disabledEventIds}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-serif mb-6 text-gray-800">
          Selected Events
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <SelectedEvents
            selectedEvents={selectedEvents}
            onDeselect={handleDeselectEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
