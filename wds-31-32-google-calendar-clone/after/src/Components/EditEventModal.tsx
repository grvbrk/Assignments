import { format } from "date-fns";
import { useState } from "react";
import useEventContext, { EventType } from "../Context/CalendarContext";

type EditEventPropsType = {
  modalDate: Date;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function EditEventModal({ modalDate, setIsModalOpen }: EditEventPropsType) {
  const [formData, setFormData] = useState({
    name: "",
    ["all-day"]: false,
    ["start-time"]: "",
    ["end-time"]: "",
    color: "",
  });

  const { events, addEvent, deleteEvent, updateEvent } = useEventContext();

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsModalOpen(false);

    const event = {
      id: crypto.randomUUID(),
      eventDate: modalDate,
      ...formData,
    };

    addEvent(event);
  }

  function handleEventChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-body">
        <div className="modal-title">
          <div>Add Event</div>
          <small>{format(modalDate, "d/M/yy")}</small>
          <button
            onClick={() => setIsModalOpen((t) => !t)}
            className="close-btn"
          >
            &times;
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleEventChange}
            />
          </div>
          <div className="form-group checkbox">
            <input
              type="checkbox"
              name="all-day"
              id="all-day"
              checked={formData["all-day"]}
              onChange={handleEventChange}
            />
            <label htmlFor="all-day">All Day?</label>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="start-time">Start Time</label>
              <input
                type="time"
                name="start-time"
                id="start-time"
                value={formData["start-time"]}
                onChange={handleEventChange}
                disabled={formData["all-day"]}
              />
            </div>
            <div className="form-group">
              <label htmlFor="end-time">End Time</label>
              <input
                type="time"
                name="end-time"
                id="end-time"
                value={formData["end-time"]}
                onChange={handleEventChange}
                disabled={formData["all-day"]}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Color</label>
            <div className="row left">
              <input
                type="radio"
                name="color"
                value="blue"
                id="blue"
                checked={formData.color === "blue"}
                onChange={handleEventChange}
                className="color-radio"
              />
              <label htmlFor="blue">
                <span className="sr-only">Blue</span>
              </label>
              <input
                type="radio"
                name="color"
                value="red"
                id="red"
                className="color-radio"
                checked={formData.color === "red"}
                onChange={handleEventChange}
              />
              <label htmlFor="red">
                <span className="sr-only">Red</span>
              </label>
              <input
                type="radio"
                name="color"
                value="green"
                id="green"
                className="color-radio"
                checked={formData.color === "green"}
                onChange={handleEventChange}
              />
              <label htmlFor="green">
                <span className="sr-only">Green</span>
              </label>
            </div>
          </div>
          <div className="row">
            <button className="btn btn-success" type="submit">
              Add
            </button>
            <button
              className="btn btn-delete"
              type="button"
              onClick={() => setIsModalOpen((t) => !t)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventModal;
