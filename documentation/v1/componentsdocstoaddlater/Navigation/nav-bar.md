# NavBar.js

## Summary
`<NavBar>` is a component used within `<Header>` in order to show a navigation menu with links at the standard screen sizes. The `navItems` component is used to pull in the required navigation titles and links. Routing is done with the `<Link>` element from `react-router-dom`.

## How it's used
This menu shows on all pages at standard desktop screen sizes (and is replaced by `<MobileNavBar>` at smaller screens). Data for the items and any sub-items is pulled in from `{ navItems }`. An arrow SVG is used to show an item has sub-items, and is animated on hover with CSS to show the menu is open. 

## Parameters
There are no parameters for this component.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
