# Td.js

## Summary
`<Td>` is a clever component that allows for a `to` value to be passed into a `<td>`. This allows for `react-router` to route into `<Link>` elements on the page in order to display modals.

## How it's used
It is used in tables where data needs to be displayed as a modal over the top of the page. If a `to` value is set on the `<Td>`, a `<Link>` is set with this value within the standard `<td>` element. If not, simply a `<div>` with the content is shown.

## Parameters
* children
    * `children` is used to drop and content into the `<td>` element.
* to
    * `to` is checked to be true; if it is, a `<Link>` is used, else simply `div` is passed in.
* className
    * `className` is passed to the top level `<td>` component to allow for consistent styling.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
