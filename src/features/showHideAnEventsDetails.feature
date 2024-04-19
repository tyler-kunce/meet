Feature: Show/hide event details

    Scenario: An event element is collapsed by default
        Given the app is open
        When the list of events display
        Then the event details are hidden by default

    Scenario: User can expand an event to see details
        Given an event has hidden details
        When the user clicks the button to show details
        Then the details of that event will display

    Scenario: User can collapse an event to hide details
        Given an event displays its details
        When the user clicks the button to hide details
        Then the app will no longer display the details