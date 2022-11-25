# ContentInfo.js

## Summary
`<ContentInfo>` is a component that sets a heading and body of text. This is simply a `<h2>` and `<p>` respectively, as a `<h1>` is used to display the main heading of the website. Optionally, a `<button>` can be displayed to take the user to the previous page.

## How it's used
The component is used on the landing page to add a subheading and description of the website to provide instructions on how to use the website and what it is used for. 
On the NotFound page, the `<button>` is displayed to provide a clear way to get the user back to the previous page (using the `useNavigate` hook from `react-router-dom`).

## Parameters
* title
    * `props.title` is used to pass content into the `<h2>` element.
* body
    * `props.body` is used to pass content into the `<p>` element.
* error
    * `props.error` is first checked if it has been passsed. If it has, it renders a `<button>` to return the user to the previous page, for use in the NotFound page.

## Authors
This component was created by [Tom Shaw](https://github.com/tomshaw650).
