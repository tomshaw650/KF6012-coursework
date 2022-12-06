# UpdatePage.js

## Summary

`UpdatePage` is only shown when the user is authenticated and tries to acccess the '/admin' route. The page renders a list of papers, and allows the user to update the award status of each paper.

## How it works

The papers are fetched with `useApiRequest`, and pagination/searching/dropdown filtering is set. `adminList` is created with the `AdminList` component mapped with the fetched data, and passed into the table body to show the papers. The `UpdateAward` component is passed the paper ID and the current award status, and is rendered in the table body.

## Parameters

- handleSignOut
  - `props.handleSignOut` is used to pass the `handleSignOut` function from `AdminPage.js` to the `UpdatePage` component, so that the user can sign out from this page.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
