# navItems.js

## Summary
This component is more of a data store, simply consisting of an exported Array to hold the names and links of all required items for navigation. This is done so that it doesn't need to be repeated across the two separate menu components.

## How it's used
This is used as an array for both `<NavBar>` and `<MobileNavBar>` to populate the navigation items. Each menu item is an object that has a name, link and subMenu.

## Parameters
* name
    * Each object has a `name` value, which is the text that will actually display within the menu.
* link
    * Each object has a `link` value, which will be leveraged by `react-router-dom` to correctly route to pages.
* subMenu
    * If a menu item requires items within it, a `submenu` can be created which is simply an Array of further navigation objects.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
