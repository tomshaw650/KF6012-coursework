# AuthorModal.js

## Summary
`<AuthorModal>` renders a modal box displaying all the papers the chosen author has worked on.

## How it's used
This modal is used on the Author page. The Author ID is a clickable link which will take send the ID as a param with `useParams` and pass it to a fetch with `useApiRequest` in order to gather the correct data. `useLocation` is also used from `react-router-dom` to display over the top of the current page.

## Parameters
* authorId
    * While not a traditional React prop, `{ authorId }` is passed with `useParams` in order to get the correct author.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
