# AuthorsPage.js

## Summary

AuthorsPage is a component that displays a full page to be routed to. The route is `/authors` and the page can be found [here](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/authors)

## How it works

The page sets a location variable with the `useLocation` hook from `react-router-dom`. A set of state variables are created to set up the pagination and search feature. `useApiRequest` is then ran to get the data from the API. Calculations are made for the pagination from the fetched data such as the total amount of pages. the `authorList` component is then mapped with the data to create a valid table body. The table is then rendered with the pagination and search features.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
