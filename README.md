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

HTML pages - Three HTML page that represent the idea generator page, chat page, and login page.
Links - All pages contain buttons that link to their respective pages.
Image - Image in the chat function. 
Search - Search bar to search the database for saved ideas
Text - Text box for placeholder for where the ideas will be generated, where the saved ideas will be shown, and where the chat function will be.
Login - Input box for username and login and a submit button
Database - The saved ideas that can be pulled from the database
WebSocket - The chat with real time chatting function
