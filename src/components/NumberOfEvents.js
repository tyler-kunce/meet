// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = ({ setNumberOfEvents }) => {
  const [numberEvents, setNumberEvents] = useState('32');

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberEvents(value);
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
