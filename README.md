# Application Features, Scenarios, and Stories

## **Filter Events By City**
As a user, I should be able to search for a city, so that I can explore events that are occurring or planned.

**Scenario:** User should see a list of suggestions when they search for a city.
Given a user enters the city in which they are planning activities, when they start entering the city name in the search field, then a list of suggested events will display.

## **Show/Hide Event Details**
As a user, I should be able to select an option to display or hide details, so that I can only view those in which I’m interested.

**Scenario:** An event element is collapsed by default.
Given the app is open, when the list of events display, then the event details are be hidden by default.

## **Specify Number of Events**
As a user, I should see a preview totaling the number of events, so that I know how many are going on in a given location.

**Scenario:** When user hasn’t specified a number, 32 events are shown by default
Given a user sees a list of events, when they have not specified a number to display, then the app will show 32 events by default.

## **Use the App When Offline**
As a user, I should be able to utilize functions of the app while off network (cellular and Wifi), so that I can still execute my plans in an area with low-to-no coverage.

**Scenario:** Show cached data when there’s no internet connection.
Given a user a user has used the app recently, when there is no data coverage (Wifi or cellular), then the app will display cached data.

## **Add an App Shortcut to the Home Screen**
As a user, I should be able to launch the app from the Home Screen of my phone, so that I have the convenience of accessibility.

**Scenario:** User can install the meet app as a shortcut to their device Home Screen.
Given a user has a personal device, when the app is installed, then a shortcut can be added to the Home Screen.

# Utilization of Serverless Functions
By utilizing serverless functions, the Meet app is able to streamline user access and manage OAuth security in tandem with the Google Calendar API and the application itself. The use of serverless functions provides developers and users with advantages in cost-effectiveness, scalability, and management of the backend processes providing developers more time to focus on code.

##**Display Charts Visualizing Event Details**
As a user, I should be able to view event details in a chart format, so that I can consume information more easily.

**Scenario:** Show a chart with the number of upcoming events in each city.
Given a user searches for a city, when the events load, then the total number of events will display in a chart.
