import { useState } from "react";
import DatePicker from "./DatePicker";

function App() {
  const [date, setDate] = useState<Date>();

  return <DatePicker date={date} setDate={setDate} />;
}

export default App;
