// src/components/NumberOfEvents.js

import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberEvents, setNumberEvents] = useState('32');

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumberEvents(value);
    setCurrentNOE(value);
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
