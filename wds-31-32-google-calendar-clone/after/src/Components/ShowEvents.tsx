import useEventContext, { EventType } from "../Context/CalendarContext";

type showEventsType = {
  date: Date;
  toggleEditEventModal: () => void;
  setEvent: (e: EventType) => void;
};

function ShowEvents({ date, toggleEditEventModal, setEvent }: showEventsType) {
  const { events } = useEventContext();
  const currentEvents = events.filter((e) => e.eventDate === date);

  function editEventModal(e: EventType) {
    toggleEditEventModal();
    setEvent(e);
  }

  return (
    currentEvents.length > 0 && (
      <div className="events">
        {currentEvents.map((e, idx) => {
          const ampm =
            Number(e["start-time"].split(":")[0]) >= 12 ? "pm" : "am";
          const time = e["start-time"] + ampm;
          return (
            <div key={idx}>
              {e["all-day"] ? (
                <button
                  className={`all-day-event ${e.color} event`}
                  onClick={() => editEventModal(e)}
                >
                  <div className="event-name">{e.name}</div>
                </button>
              ) : (
                <button className="event" onClick={() => editEventModal(e)}>
                  <div className={`color-dot ${e.color}`}></div>
                  <div className="event-time">{time}</div>
                  <div className="event-name">{e.name}</div>
                </button>
              )}
            </div>
          );
        })}
      </div>
    )
  );
}

export default ShowEvents;
