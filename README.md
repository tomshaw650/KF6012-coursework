## STUDENT DETAILS -
- Name: Tom Shaw
- Student ID: W19025481

## COURSEWORK URLS -
### API:
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/affiliation
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/authenticate (requires POST request)
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/update (requires POST request)

### APP:
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/authors
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/authors/affiliation
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/interactivity
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/fullpapers
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/wip
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/competition
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/doctoral
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/papers/rapid
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/admin

### DOCS:
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/documentation
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/documentation/v1/intro
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/documentation/v1/API/how-it-works
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/documentation/v1/Documentation/how-it-works
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/documentation/v1/Frontend/how-it-works
(Not including all of the docs pages as the README would be far too long)

## ESSENTIAL INFORMATION -
- Some consideration has gone into responsiveness and accessibility. Places where a screen reader may not work as expected have span elements with the Tailwind class "sr-only" in order to support this. There is a specific mobile menu that shows at the appropriate screensize.
- Data fetching is done with a custom 'useApiRequest' hook, which can be found in the 'helpers' directory.
- The track pages are generated dynamically using the 'react-router-dom' package, and the data is fetched from the API.
- I chose to use modals in multiple places across the app in an interesting way. These are implemented with 'react-router-dom', using useLocation and Outlet to render modals ontop of the current page, and useNavigate to route backwards.
- 'react-icons' was used for the majority of icons in the app.
