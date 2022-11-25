# SearchBar.js

## Summary
`<SearchBar>` is used to display a search bar to search terms within the author page and all pages displaying papers. It uses an API endpoint parameter to check for the title or abstract in the papers, or the first/last name in the authors.

## How it's used
It is used in the authors/papers pages to allow the user to find specific papers or authors within the list. It uses `onChange` to update while the user types rather than using a submit button.

## Parameters
* setSearchTerm
    * `props.setSearchTerm` is set within a `handleChange()` function to be passed into the `onChange` value of the `<input>`. This means that the setSearchTerm can be a stateful value within the page it is used, and allows for searching to happen while the user types.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
