# AdminPage.js

## Summary

AdminPage is a component that displays a full page to be routed to with a login screen. The route is `/admin` and the page can be found [here](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/admin)

## How it works

The page sets a location variable with the `useLocation` hook from `react-router-dom`. The `{ Buffer }` library is used to encode the username and password for authorisation. State variables are set for username and password, and appropriate handlers are made. There is a showPassword state to allow for a show/hide button on the password. Handling login first sets the password shown to false, so that it is not left visible after signing out. An encoded string is made, and passed to a fetch POST request with the appropriate headers. If the response is successful, the user is authenticated with a JWT token.

## Parameters

- authenticated
  - `props.authenticated` is used to pass the `authenticated` state from `App.js` to the `AdminPage` component, so that the user can be authenticated.
- handleAuthenticated
  - `props.handleAuthenticated` is used to pass the `handleAuthenticated` function from `App.js` to the `AdminPage` component, so that the user can be authenticated.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
