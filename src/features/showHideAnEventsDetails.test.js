import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import { UserEvent, userEvent } from '@testing-library/user-event';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  // Scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppComponent;

    given('the app is open', () => {
      AppComponent = render(<App />);
    });

    when('the list of events display', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    });

    then('the event details are hidden by default', () => {
      const EventDOM = AppComponent.container.firstChild;
      const eventDetails = EventDOM.querySelector('.details');
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  // Scenario 2
  test('User can expand an event to see details', ({ given, when, then }) => {
    let EventComponent;
    let allEvents;

    given('an event has hidden details', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(
        EventComponent.container.querySelector('.details')
      ).not.toBeInTheDocument();
    });

    when('the user clicks the button to show details', async () => {
      const toggleDetails = EventComponent.queryByText('Show Details');
      const user = userEvent.setup();
      await user.click(toggleDetails);
    });

    then('the details of that event will display', () => {
      expect(
        EventComponent.container.querySelector('.details')
      ).toBeInTheDocument();
      expect(EventComponent.queryByText('Hide Details')).toBeInTheDocument();
    });
  });

  // Scenario 3
  test('User can collapse an event to hide details', ({
    given,
    when,
    then,
  }) => {
    let EventComponent;
    let allEvents;

    given('an event displays its details', async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      await user.click(EventComponent.queryByText('Show Details'));
      expect(
        EventComponent.container.querySelector('.details')
      ).toBeInTheDocument();
    });

    when('the user clicks the button to hide details', async () => {
      const toggleDetails = EventComponent.queryByText('Hide Details');
      const user = userEvent.setup();
      await user.click(toggleDetails);
    });

    then('the app will no longer display the details', () => {
      expect(
        EventComponent.container.querySelector('.details')
      ).not.toBeInTheDocument();
      expect(
        EventComponent.queryByText('Hide Details')
      ).not.toBeInTheDocument();
    });
  });
});
