# AdminList.js

## Summary

`<AdminList>` is a component used to pass fetched data into a `<table>` element. Using the proper HTML elements, AdminList outputs a semantically correct `<tr>` which allows props to be passed into the `<td>` elements. Another component is used, `<Td>`, in order to pass links into a `<td>`.

## How it's used

The AdminList is initialised on the UpdatePage for authenticated users only. It can be combined with the `useApiRequest` hook to map data onto the `<td>` elements, and then passed into the tableBody prop of the `<Table>`. This component is used to display the list of papers and lets the user update the award status.

## Parameters

There are some parameters that can be passed to the AdminList.

- paper_id
  - `props.paper_id` is used to pass an Paper ID to the list. This is used as a key and displayed within the `<Td>` component to display a modal.
- title
  - `props.title` is used to pass the Paper's title to the list.
- location
  - `props.location` is used to sync with the `useLocation()` hook from `react-router-dom` in order to properly display a modal over the current page.
- has_award
  - `props.has_award` is used to pass the Paper's award status to the list. This is used to display the award status in the table.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
