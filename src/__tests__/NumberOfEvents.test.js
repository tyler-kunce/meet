// src/__tests__/NumberOfEvents.test.js

import { render } from '@testing-library/react';
import { getEvents } from '../api';
import NumberOfEvents from '../components/NumberOfEvents';
import { UserEvent, userEvent } from '@testing-library/user-event';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });

  test('renders a textbox role', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
  });

  test('default value of events is 32', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
  });

  test('updates NumberOfEvents when new value entered in textbox', async () => {
    const numberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(numberOfEvents, '{backspace}{backspace}10');
    expect(numberOfEvents.value).toBe('10');
  });
});
