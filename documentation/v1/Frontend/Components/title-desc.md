# TitleDesc.js

## Summary
`<TitleDesc>` is a component that provide guidances and instructions for a page.

## How it's used
The component is used on all pages with a `<Table>` to give instruction on how to navigate. An optional extra line can be added if the user is identified as an administrator.

## Parameters
* title
    * `props.title` allows each page to set a unique title related to the table.
* description
    * `props.description` allows each page to set a unique instruction related to the table.
* admin
    * `props.admin` is first checked if it exists; if it does, an extra (red coloured) line of text appears to show how what administrator priveliges provide for this page.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
