import { standardTime } from "../../../utils/timing";

interface Event {
  id: number;
  event_name: string;
  event_category: string;
  start_time: string;
  end_time: string;
}

interface EventCardProps {
  event: Event;
  onSelect: (id: number) => void;
  disabled: boolean;
}

const EventCard = ({ event, onSelect, disabled }:EventCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-row justify-between items-center">
      <div className="flex justify-center items-center p-4">
        <span className="text-5xl font-serif text-gray-800">
          {event.event_category.charAt(0)}
        </span>
      </div>
      <div className="border border-slate-900 h-12" />
      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {event.event_name}
          </h3>
          <p className="text-gray-600 mb-1">{event.event_category}</p>
          <p className="text-gray-500 text-sm">
            {standardTime(event.start_time)} - {standardTime(event.end_time)}
          </p>
        </div>
        <div className="flex items-end mt-auto">
          <button
            onClick={() => onSelect(event.id)}
            disabled={disabled}
            className={`w-full py-2 text-white font-semibold rounded-lg ${
              disabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } transition-colors duration-300`}
          >
            {disabled ? "Unavailable" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
