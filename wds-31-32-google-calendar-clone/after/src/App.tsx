import { useState } from "react";
import Calendar from "./Components/Calendar";
import { format } from "date-fns";
import EditEventModal from "./Components/EditEventModal";

function App() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalDate, setModalDate] = useState<Date>(new Date());
  return (
    <div id="root">
      <Calendar
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        setIsModalOpen={setIsModalOpen}
        setModalDate={setModalDate}
      />
      s
      {isModalOpen && (
        <EditEventModal modalDate={modalDate} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}

export default App;
