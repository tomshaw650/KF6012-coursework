# Pagination.js

## Summary
`<Pagination>` is a component to allow the tables, which will contain a lot of data rows, to be split into smaller 'pages' and provide a way to navigate backward and forward between these pages. The component also displays which page the user is currently on, and how many total pages there are.

## How it's used
This component is used in every page where there is a table, in order to keep the data on the page to a minimum. It is done by calculating how many items there are total in the table, and doing calculations on that alongside some state values for how many pages should be shown, for example. The component does this by handling calculations based on button clicks of 'Previous' and 'Next' on the page.

## Parameters
* nRows
    * `nRows` is set within each page. The calculation is as such:
    * `Math.ceil(data.length / rowsPerPage);`
        * `data` is the fetched data from `useApiRequest`.
        * `rowsPerPage` is a state variable, set based on how many rows should show for each table.
* currentPage
    * `currentPage` keeps track of the page the user is currently on, in order to display this info to the user.
* setCurrentPage
    * `setCurrentPage` is passed in and set as a `useState` setter in order to keep track of the page number changing.

## Authors
This component was created by [Kunal Nalawade](https://levelup.gitconnected.com/a-simple-guide-to-pagination-in-react-facd6f785bd0) and adapted for use within this project by [Tom Shaw](https://github.com/tomshaw650).
