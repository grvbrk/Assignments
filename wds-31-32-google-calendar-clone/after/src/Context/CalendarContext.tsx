import { createContext, useContext, useState } from "react";

type EventType = {
  id: string;
  name: string;
  ["all-day"]: boolean;
  ["start-time"]: string;
  ["end-time"]: string;
  blue: boolean;
  red: boolean;
  green: boolean;
};

type ContextType = {
  events: EventType[];
  addEvent: (event: EventType) => void;
  deleteEvent: (event: EventType) => void;
  updateEvent: (event: EventType) => void;
};

export const Context = createContext<ContextType | undefined>(undefined);

function EventContext({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<EventType[]>([]);

  function addEvent(event: EventType) {
    setEvents((prevEvents) => {
      return [...prevEvents, { ...event, id: crypto.randomUUID() }];
    });
  }

  function deleteEvent(event: EventType) {
    setEvents((prevEvents) => {
      return prevEvents?.filter((e) => e.id !== event.id);
    });
  }

  function updateEvent(event: EventType) {
    setEvents((prevEvent) => {
      return prevEvent?.map((e) => {
        return e.id === event.id ? { ...e, ...event } : e;
      });
    });
  }

  return (
    <Context.Provider value={{ events, addEvent, deleteEvent, updateEvent }}>
      {children}
    </Context.Provider>
  );
}

export default function useEventContext() {
  const context = useContext(Context);
  if (!context)
    throw new Error("useEventContext must be used within a context Provider");

  return context;
}
