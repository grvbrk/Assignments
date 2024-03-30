import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { EventContext } from "./Context/CalendarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <EventContext>
    <App />
  </EventContext>
  // </React.StrictMode>
);
