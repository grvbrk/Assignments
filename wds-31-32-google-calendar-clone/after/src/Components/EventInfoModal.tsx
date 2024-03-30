import { format } from "date-fns";
import { EventType } from "../Context/CalendarContext";

type EditInfoPropsType = {
  currentEvent: EventType;
  toggleEditEventModal: () => void;

  // setModalDate: React.Dispatch<React.SetStateAction<Date>>;
};

function EventInfoModal({
  currentEvent,
  toggleEditEventModal,
}: EditInfoPropsType) {
  const {
    eventDate,
    "all-day": allDay,
    color,
    name,
    "start-time": startTime,
  } = currentEvent;
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-body">
        <div className="modal-title">
          {format(eventDate!, "d/M/yy")}
          <button className="close-btn" onClick={toggleEditEventModal}>
            &times;
          </button>
        </div>
        <div className="events">
          {allDay ? (
            <button className={`all-day-event ${color} event`}>
              <div className="event-name">{name}</div>
            </button>
          ) : (
            <button className="event">
              <div className={`color-dot ${color}`}></div>
              <div className="event-time">{startTime}</div>
              <div className="event-name">{name}</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventInfoModal;
