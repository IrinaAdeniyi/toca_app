# Instructions to run Toca app

To get app running:
- run `yarn start` or `npm start`

Explainations:
- Local storage has been used as the app database for this project
- Each different user is indentified by an id
- The main user id has a value of 1
- To communicate with this user (secondary user) the id needs to be set to a different value
- I used material-ui for the UI designs
- The app was split in 2 components (Chat message and Chat room)
- Chat room represents the area around which the message app is built
- Chat message is used for displaying user messages

After thinking about my app, I think I could have done better in the following areas:
- If you don't write anything you can send an empty message, I don't that should happen
- When you send a message it won't scroll down automatically 
- When you send a message the textbox value should clear, but it doesn't