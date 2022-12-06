# UpdateAward.js

## Summary

`UpdateAward` is responsible for rendering a dropdown menu, which allows the user to select the new award status of the paper. When the user makes a selection, the component sends a request to the API to update the paper's award status.

## How it works

`FormData()` is created and passed appropriate values. The JWT token is retrieved from local storage. The component uses JWT as a bearer token to verify the POST request to the API. A POST request is made with the appropriate headers and the `FormData()` object. Finally, a dropdown is rendered to allow this fetch to be passed relevant values.

## Parameters

- paperId
  - `props.paperId` is used to pass the Paper ID to the form data from the selected paper.
- award
  - `award` sets the default value of the dropdown, such that the paper selected will have the correct initial award status displayed.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650), using the workshop code from [John Rooksby](https://github.com/johnrooksby).
