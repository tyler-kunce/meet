Feature: Specify number of events

    Scenario: When user hasn't specified a number, 32 events are show by default.
        Given a user sees a list of events
        When a number of events to display is not specified
        Then the app will show 32 events by default

    Scenario: User can change the number of events displayed.
        Given the user sees a list of events
        When the number of events to display is changed
        Then the number of events displayed will update to the user selection
