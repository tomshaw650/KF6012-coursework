# PaperAuthorModal.js

## Summary

`<PaperAuthorModal>` renders a modal box displaying all the authors related to a specific paper, alongside the institution they are affiliated with, and their country of origin.

## How it's used

This modal is used on all papers pages. The 'View' link on each paper will send the ID as a param with `useParams` and pass it to a fetch with `useApiRequest` in order to gather the correct data. `useLocation` is also used from `react-router-dom` to display over the top of the current page.

## Parameters

- paperId
  - While not a traditional React prop, `{ paperId }` is passed with `useParams` in order to get the correct paper ID from the URL.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
