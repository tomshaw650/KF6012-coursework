# AuthorList.js

## Summary
`<AuthorList>` is a component used to pass fetched data into a `<table>` element. Using the proper HTML elements, AuthorList outputs a semantically correct `<tr>` allows props to passed into the `<td>` elements. Another component is used, `<Td>`, in order to pass links into a `<td>`.

## How it's used
The AuthorList is initialised on each page that requires author data. It can be combined with the `useApiRequest` hook to map data onto the `<td>` elements, and then passed into the tableBody prop of the `<Table>`.

## Parameters
There are some parameters that can be passed to the AuthorList.
* author_id
    * `props.author_id` is used to pass an Author ID to the list. This is used as a key and displayed within the `<Td>` component to display a modal.
* location
    * `props.location` is used to sync with the `useLocation()` hook from `react-router-dom` in order to properly display a modal over the current page.
* first_name
    * `props.first_name` is used to pass the Author's first name to the list.
* middle_initial
    * `props.middle_initial` is used to pass the Author's middle initial to the list. The API works such that if there is no middle initial, nothing is passed.
* first_name
    * `props.last_name` is used to pass the Author's last name to the list.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).