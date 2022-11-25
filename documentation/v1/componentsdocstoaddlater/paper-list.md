# PaperList.js

## Summary
`<PaperList>` is a component used to pass fetched data into a `<table>` element. Using the proper HTML elements, PaperList outputs a semantically correct `<tr>` allows props to passed into the `<td>` elements. Another component is used, `<Td>`, in order to pass links into a `<td>`. The component leverages the `react-icon` library alongside my own `ConfigIcon` to add icons for readability.

## How it's used
The PaperList is initialised on each page that requires paper data. It can be combined with the `useApiRequest` hook to map data onto the `<td>` elements, and then passed into the tableBody prop of the `<Table>`.

## Parameters
There are some parameters that can be passed to the AuthorList.
* paper_id
    * `props.paper_id` is used to pass an Paper ID to the list. This is used as a key and an item within the table.
* title 
    * `props.title` is used to pass the Title into the table.
* has_award
    * `props.has_award` is first null checked. If it is null, an X icon is displayed in award row. If it is not null, a tick is instead displayed.
* location
    * `props.location` is used to sync with the `useLocation()` hook from `react-router-dom` in order to properly display a modal over the current page.
* abstract
    * `props.abstract` is used to display the Abstract. If the abstract is longer than 10 characters (it always is), it is concatenated down to 10 characters and appended with '...' to show there is content not being shown. If the abstract is clicked by the user, a modal appears with the full abstract to read.
* track_key
    * `props.track_key` is used to display the shortened name of the track of the paper.
* track_name
    * `props.track_key` is used to display the full name of the track of the paper.

## Authors

This component was created by [Tom Shaw](https://github.com/tomshaw650).