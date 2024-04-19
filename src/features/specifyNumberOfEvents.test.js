import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  // Scenario 1
  test("When user hasn't specified a number, 32 events are show by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let EventList;

    given('a user sees a list of events', () => {
      AppComponent = render(<App />);
    });

    when('a number of events to display is not specified', () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      expect(EventListDOM).toBeInTheDocument();
    });

    then('the app will show 32 events by default', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  // Scenario 2
  test('User can change the number of events displayed.', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given('the user sees a list of events', async () => {
      const user = userEvent.setup();
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const NumOfEventsDOM = AppDOM.querySelector('#number-events');
      const numOfEventsInput = within(NumOfEventsDOM).queryByRole('textbox');
      await user.type(numOfEventsInput, '{backspace}{backspace}10');
    });

    when('the number of events to display is changed', () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      expect(EventListDOM).toBeInTheDocument();
    });

    then(
      'the number of events displayed will update to the user selection',
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        const allEvents = within(EventListDOM).queryAllByRole('listitem');
        expect(allEvents.length).toEqual(10);
      }
    );
  });
});
