# useApiRequest.js

## Overview

`useApiRequest` is a custom hook that is used to make API requests. It uses the `useEffect` hook to fetch the data from a passed in URL. It returns the data and loading state. It is agnostic to any of the pages and is used for all fetching across the app.

## State Variables

`useApiRequest` uses the `useState` hook to create variables for the data and for the loading state. The data is initialised as an empty array, and the loading state is initialised as `true`. `loading` is set to `false` when the data is fetched, and the data is set upon the promise being resolved.

## Authors

The `useApiRequest` hook was created [Riku Rouvila](https://dev.to/rikurouvila/clean-and-reusable-data-fetching-in-react-components-165), and adapted for use in the project by [Tom Shaw](https://github.com/tomshaw650).
