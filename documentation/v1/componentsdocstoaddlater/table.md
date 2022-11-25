# Table.js

## Summary
`<Table>` is a component for displaying a table for each page that requires fetched data from the API.

## How it's used
It is used on each of the author/paper pages to display data from the API. It maps over given headers to display `<th>`'s and the data from `AuthorList` or `PaperList` is used to populate the content.

## Parameters
* headers
    * `props.headers` allows each page to pass in an array of strings. The component maps over these to populate the table headers.
* tableBody
    * `props.tableBody` is designed such that it takes up the entirety of the `<tbody>`, so that the `AuthorList` or `PaperList` component can be dropped in with ease.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
