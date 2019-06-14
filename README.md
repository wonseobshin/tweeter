# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

body-parser: ^1.15.2
chance: ^1.0.2
express: ^4.13.4
md5: ^2.1.0
mongodb: ^2.2.36

## Feature and Functionalities

1. Interactive website
	Uses jQuery and CSS to allows users to interact with web elements.

2. Seamless errors
	Users are not redirected when they make a mistake. Instead, they will be greeted with a sliding window with the error description that slides back up when fixed.

3. Safe Against Malicious Inputs
	The form will take and append to the database as a text only. Inputs like "<script> ... </script>" will not run and instead just be posted as text.

4. Hidden Composing Window
	The window to add a tweet to the feed is hidden until a button is pressed on the navigation bar.

5. MongoDB Powered
	All tweets are stored in a database now!

## Screenshots

![Screenshots of tweet compose box](/docs/Capture.jpeg)
![Window to show errors when submitting an invalid tweet](/docs/error.jpeg)
