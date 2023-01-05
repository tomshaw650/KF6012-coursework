## STUDENT DETAILS -

- Name: Tom Shaw
- Student ID: W19025481

## COURSEWORK URLS -

### API:

- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper _(or papers)_
  - http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?track=fullpapers
  - http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?author_id=64289
  - http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?paper_id=64455
  - http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/paper?search=game
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author _(or authors)_
  - http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?paper_id=64455
  - http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/api/author?search=dit
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
- http://unn-w19025481.newnumyspace.co.uk/kf6012/coursework/app/admin/signup

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
- You can create new accounts! this will add a new entry into the 'account' table with a Bcrypt hashed password. Kay has been added 'kayrogage/admin'. You can also try adding new ones.
- 'react-icons' was used for the majority of icons in the app.
