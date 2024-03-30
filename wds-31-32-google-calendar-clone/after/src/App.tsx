import { useState } from "react";
import Calendar from "./Components/Calendar";
import EditEventModal from "./Components/EditEventModal";
import EventInfoModal from "./Components/EventInfoModal";
import { EventType } from "./Context/CalendarContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEventModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<Date>(new Date());
  const [currentEvent, setCurrentEvent] = useState<EventType | undefined>(
    undefined
  );

  function toggleEditEventModal() {
    setIsEditModalOpen((t) => !t);
  }

  function setEvent(e: EventType) {
    setCurrentEvent(e);
  }

  return (
    <div id="root">
      <Calendar
        setIsModalOpen={setIsModalOpen}
        toggleEditEventModal={toggleEditEventModal}
        setEvent={setEvent}
        setModalDate={setModalDate}
      />
      s
      {isModalOpen && (
        <EditEventModal modalDate={modalDate} setIsModalOpen={setIsModalOpen} />
      )}
      {isEventModalOpen && (
        <EventInfoModal
          currentEvent={currentEvent!}
          toggleEditEventModal={toggleEditEventModal}
        />
      )}
    </div>
  );
}

export default App;
