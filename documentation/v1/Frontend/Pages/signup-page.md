# SignupPage.js

## Summary

SignupPage is a component that displays a full page to be routed to with a signup screen. The route is `/admin/signup` and the page can be found [here](http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/admin/signup)

## How it works

The page sets a location variable with the `useLocation` hook from `react-router-dom`.  State variables are set for the name, username and password, and appropriate handlers are made. There is a showPassword state to allow for a show/hide button on the password. Handling signup first sets the password shown to false, so that it is not left visible after signing out. If the response is successful (all entries are filled out) then the data is added to the table, a message given to the user and they are redirected to the login page.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
