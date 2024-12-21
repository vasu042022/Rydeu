import React from 'react';
import { FiCalendar } from 'react-icons/fi';

const DatePickerInput = ({ placeholder = "Select a date", onChange, value }) => {
  const inputRef = React.useRef(null);

  // Open the native date picker on icon click
  const openDatePicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Native method to open the date picker
    }
  };

  return (
    <div className="relative flex items-center">
      {/* Custom Calendar Icon */}
      <FiCalendar
        className="absolute left-3 text-gray-500 cursor-pointer"
        size={20}
        onClick={openDatePicker}
      />
      {/* Text Input */}
      <input
        type="date"
        ref={inputRef}
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 rounded-md focus:outline-none text-gray-700 appearance-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default DatePickerInput;
