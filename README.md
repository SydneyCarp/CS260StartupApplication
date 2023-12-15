# CS260StartupApplication

# Elavator Pitch:
Have you ever struggled to come up with new things to draw? Well this website is here to help. This website randomly generates new and fun ideas for struggling artists. Artists can also chat with other struggling artists to gain new inspiration. They can also save ideas for future reference.

# Key Features:
- Ability to randomly generate art ideas
- Secure login over HTTPS
- Realtime chat with other users
- Ability to save generated art ideas

# Technologies:
- HTML - I will use three HTML pages. One for login and one for generating and viewing saved ideas and one for chatting with other users.
- CSS - I will use CSS to apply appropriate styling on each page.
- JavaScript - I will use JavaScript for the login information, randomized generation, saving generated ideas, and displaying messages from other users.
- Service - I will use Service for the login, retrieving chat messages, and retrieving saved generated ideas.
- DB - I will use DB for storing chat messages and saved generated ideas.
- Login - I will use Login for registering and loging users in. Users won't be abe to chat unless they have logged in.
- WebSocket - I will use WebSocket to send messages to other users.

# Website Design
![Website Design CS 260](https://github.com/SydneyCarp/CS260StartupApplication/assets/96961638/5a46a4d8-2928-4620-ad59-8ea8b8f7aa5c)

# HTML deliverable
For this deliverable I built out the structure of my application using HTML.

- HTML pages - Three HTML page that represent the idea generator page, chat page, and login page.
- Links - All pages contain buttons that link to their respective pages.
- Image - Image in the chat function. 
- Search - Search bar to search the database for saved ideas
- Text - Text box for placeholder for where the ideas will be generated, where the saved ideas will be shown, and where the chat function will be.
- Login - Input box for username and login and a submit button
- Database - The saved ideas that can be pulled from the database
- WebSocket - The chat with real time chatting function

# CSS deliverable
For this deliverable I properly styled the application into its final appearance.

- I have a header, footer, and main content body for each page.
- Navigation Elements - My buttons are properly sized and lead to the correct links.
- Window Resizing - My site changes when resized and looks good in all sizes.
- Elements - I used good whitespace, sizing, and contrast in all of my pages.
- Text - I used consistant fonts, colors, and sizes between my different sites.
- Image - Added an image in the chat function.

# JavaScript deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.

- login - I added JavaScript for future implementation of a login feature
- database - Will store art ideas in the locale storage and use local storage to save and display saved ideas. Will be replaced with a database later
- WebSocket - I added some webSocket elements to eventually have a chatting feature
- application logic - I added a promise to randomly generate and display art ideas. Will eventually be able to save, display, and remove art ideas

# Service deliverable
I added backend endpoints that receives ideas and returns ideas.

- Node.js/Express HTTP service - updated the index.js to match the needed HTTP service calls
- Static middleware for frontend - added this to index.js
- Calls to third party endpoints - Did not have a place to implment this
- Backend service endpoints - Placeholders for login that stores the current user on the server
- Frontend calls service endpoints - I do this in my idea generator

# DB deliverable
For this deliverable I stored the ideas in the database.

- Created a MongoDB Atlas database
- Endpoints for data - My endpoint send information to mongo
- Stores data in MongoDB

# Login deliverable
For this deliverable I associate the idea generator with the logged in user.

- User registration - Creates a new account in the database.
- existing user - Stores the ideas under the same user if the user already exists.
- Use MongoDB to store credentials - Stores both user and their ideas.
- Restricts functionality - You cannot generate ideas until you have logged in.

# WebSocket deliverable
For this deliverable I used webSocket to add a chat on the frontend in realtime.

- Added backend listens for WebSocket connection
- Added frontend that makes WebSocket connection
- Have data that is sent over WebSocket connection
- WebSocket data displayed - has the backend to be able to display chats

# React deliverable

- I bundled using WebPack and Babel
- Components - Login and idea generator are components
- Router - Routing between login and idea generator was created
- Hooks - use to check login

