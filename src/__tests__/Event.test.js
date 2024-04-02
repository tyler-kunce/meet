// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import Event from '../components/Event';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('renders event start time', () => {
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('renders collapsed details by default', () => {
    expect(
      EventComponent.container.querySelector('.details')
    ).not.toBeInTheDocument();
  });

  test('expands details when clicked', async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('Show Details'));
    expect(
      EventComponent.container.querySelector('.details')
    ).toBeInTheDocument();
  });

  test('collapses details when clicked while originally expanded', async () => {
    const user = userEvent.setup();
    await user.click(EventComponent.queryByText('Hide Details'));
    expect(
      EventComponent.container.querySelector('.details')
    ).not.toBeInTheDocument();
  });
});
