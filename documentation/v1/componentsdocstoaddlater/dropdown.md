# DropDown.js

## Summary
`<DropDown>` is a component used to render a dropdown onto the page for filtering the academic papers based on award status.


## How it's used
The component is used on all pages that display papers in a table. It allows the user to select whether they wish to see all papers, only those that have won an award, and only those that have not won an award. The database is written in such a way that papers without an award have a null value. This is not accepted in dropdowns, so a "false" string is used and the DropDown handler exchanges this for null when it is selected.

## Parameters
* handler
    * `props.handler` is used for the `onChange` parameter in the `<select>`, and takes the `event.target.value`, which is the selected DropDown value in order to create a handler within the page it is used.
* selectValue
    * `props.selectValue` is used to set a state value in the page it is used in, with the `useState` hook. This means that the value can be updated and remembered by the browser.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
