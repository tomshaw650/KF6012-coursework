# TrackPage.js

## Summary

TrackPage is a component that displays a full page to be routed to. This is based on the dropdown within the 'Papers' navigation item. The route is `/authors/*track-name*` and an example page can be found [here](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/interactivity)

## How it works

Firstly, a prop is pulled in from the `<Route>` to determine the paper type, as well as a location variable with the `useLocation` hook. A set of state variables are created to set up the pagination, search feature and dropdown value. `useApiRequest` is then ran to get the data from the API. A function is set to filter the data based on the chosen dropdown value, which is defaulted to 'all'. Calculations are made for the pagination from the filtered data such as the total amount of pages. The `paperList` component is then mapped with the data to create a valid table body. A handler function is set for the dropdown to change the value based on the selected option. A function is set to capitalise the `{ track }` variable for use in the page title. The table is then rendered with the pagination, search features and dropdown.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
