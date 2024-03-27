/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useState } from "react";

type DatePickerProps = {
  date?: Date;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

function DatePicker({ date, setDate }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="date-picker-container">
      <button
        onClick={() => setIsOpen((val) => !val)}
        className="date-picker-button"
      >
        {date === undefined ? "Select a date" : format(date, "MMM do, yyyy")}
      </button>
      {isOpen && <DatePickerLoader date={date} setDate={setDate} />}
    </div>
  );
}

export default DatePicker;

function DatePickerLoader({ date: currentDate, setDate }: DatePickerProps) {
  const [currentVisibleMonth, setCurrentVisibleMonth] = useState(new Date());

  const currentDatesOfMonth = eachDayOfInterval({
    start: startOfWeek(startOfMonth(currentVisibleMonth)),
    end: endOfWeek(endOfMonth(currentVisibleMonth)),
  });

  function prevMonth() {
    setCurrentVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, -1);
    });
  }

  function nextMonth() {
    setCurrentVisibleMonth((currentMonth) => {
      return addMonths(currentMonth, 1);
    });
  }

  return (
    <div className="date-picker">
      <div className="date-picker-header">
        <button onClick={prevMonth} className="prev-month-button month-button">
          &larr;
        </button>
        <div className="current-month">
          {format(currentVisibleMonth, "MMMM - yyyy")}
        </div>
        <button onClick={nextMonth} className="next-month-button month-button">
          &rarr;
        </button>
      </div>
      <div className="date-picker-grid-header date-picker-grid">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="date-picker-grid-dates date-picker-grid">
        {currentDatesOfMonth.map((date) => {
          return (
            <button
              onClick={() => setDate(date)}
              className={`date ${
                !isSameMonth(date, currentVisibleMonth) &&
                "date-picker-other-month-date"
              } ${isToday(date) && "today"} ${
                isSameDay(date, currentDate!) && "selected"
              }`}
              key={date.toString()}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
