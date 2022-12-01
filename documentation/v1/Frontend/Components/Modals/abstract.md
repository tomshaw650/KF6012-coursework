# AbstractModal.js

## Summary
`<AbstractModal>` renders a modal box displaying the full abstract based on which Paper ID was clicked by the user.

## How it's used
This Modal is shown on the Papers page. It does not change the page route, instead displaying over the top through the use of the `useLocation` hook. The Paper ID is passed with the `useParams` hook, also from `react-router-dom`, and my custom `useApiRequest` hook is used to fetch the required data.

## Parameters
* paperId
    * While not a traditional React prop, `{ paperId }` is passed with `useParams` in order to get the correct paper.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
