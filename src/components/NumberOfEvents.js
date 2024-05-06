// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberEvents, setNumberEvents] = useState('32');

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberEvents(value);

    let errorText;
    if (isNaN(value) || value <= 0) {
      errorText = "Only positive numbers are allowed."
    } else {
      errorText = "";
      setCurrentNOE(value);
    } setErrorAlert(errorText);
  };

  return (
    <div id="number-events">
      <label htmlFor="number-events-input">Number of Events to Show: </label>
      <input
        type="text"
        className="number-events-input"
        value={numberEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;
