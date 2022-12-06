# AdminModal.js

## Summary

`<AdminModal>` renders a modal box displaying the a dropdown to update the award status of a paper.

## How it works

The `AdminModal` component uses the `useNavigate` hook from `react-router-dom` to create a button that closes the modal and returns to the previous page. The `useParams` hook is used to get the paperId from the URL. The `useApiRequest` custom hook is used to fetch the abstract using the `paperId` API parameter. The data from the API request is used to display a dropdown to update award status using the `UpdateAward` component. If the data is still loading, a loading message is displayed instead.

## Parameters

- paperId
  - While not a traditional React prop, `{ paperId }` is passed with `useParams` in order to get the correct paper.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).
