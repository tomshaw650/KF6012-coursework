# MobileNavBar.js

## Summary
`<MobileNavBar>` is a component used within `<Header>` in order to conditionally show a hamburger-menu style nav bar for smaller screen sizes such as mobile. `react-icons` library is used for the hamburger menu. The `navItems` component is used to pull in the required navigation titles and links. Routing is done with the `<Link>` element from `react-router-dom`.

## How it's used
This is used at mobile screen widths, leveraging media queries within the component to show only at such widths. The component uses state variables to remember if the navigation menu is open or closed, in order to decide which icon should be shown. Handlers are created to interact with the state setter in order to properly open and close the menu. An arrow SVG is used to show an item has sub-items, and is animated on hover with CSS to show the menu is open.

## Parameters
There are no parameters for this component.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).