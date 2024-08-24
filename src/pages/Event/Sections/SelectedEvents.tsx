import { standardTime } from "../../../utils/timing";

interface SelectedEventsProps {
  selectedEvents: {
    id: number;
    event_name: string;
    event_category: string;
    start_time: string;
    end_time: string;
  }[];
  onDeselect: (id: number) => void;
}

const SelectedEvents = ({
  selectedEvents,
  onDeselect,
}: SelectedEventsProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg border border-gray-200 p-4 flex flex-col space-y-4">
      {selectedEvents.length === 0 ? (
        <p className="text-gray-500 text-center">No events selected.</p>
      ) : (
        selectedEvents.map((event) => (
          <div
            key={event.id}
            className="flex justify-between items-center p-4 border rounded-lg shadow-md bg-gray-50"
          >
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                {event.event_name}
              </h4>
              <p className="text-gray-600">
                {standardTime(event.start_time)} -{" "}
                {standardTime(event.end_time)}
              </p>
            </div>
            <button
              onClick={() => onDeselect(event.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedEvents;
