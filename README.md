# Project Details

Project 3: Mock
Team members: ejones38 jwu191
Time Estimate: 15 hours
Github link: https://github.com/cs0320-s24/mock-jwu191-ejones38.git
# Design Choices

## REPLFunction
We chose to modify our repl function interface by adding additional parameters. We require any function implementing the interface to take in a boolean for the type of response, an array of string corresponding to its arguments, a string corresponding to the name of the file, and a boolean representing if the file has headers along with the setters for all of the above arguments. We chose to do so in order to garuantee that all of our functions have the required information to return the proper response. Additionally our repl function returns JSX.Elements instead of 2d array of strings. By  returning JSX.ELements we our able to format our responses all in one step which making response generation much simpler. Additionally by returning JSX.Elements we our able to change our output between brief and verbose all in one step saving considerable effort. 
## History Type
In this project we chose to have represent our history as a array of JSX.Elements. Since our functions all return JSX.Elements it made sense to just directly add those elements to our history instead of interconverting our outputs between a 2d array of strings and a JSX.Elemen
## Handlers class
All of our command functions are stored in the Handlers class. Each handler implements the REPLFunction interface taking in series of arguments and returning a JSX.Element By having all handlers contained in the same class it simplifies the addition of new commands 
## Command Selection
Commands are input through a command line. We split this input into an array of arguments with the first argument being the command name itself. All commands alos exist in a map of key (command name) to value (commmand function). This allows us to take commandline input, separate it into its arguemtns, and pass the command name to our map returning the correct command function. This enables us to add and remove commands easily from our front-end program.
## Overall Design
Our User input is contained within the repl input class. When command is called our repl input takes that command string breaks up its arguments and uses those arguments to call the proper command handler. This handlers output is then added to our replhistory. Repl hsitory adds our command output to the screen where it is displayed to users. 

# Errors/Bugs

No known errors

# Tests

Our testing suite is contained within App.spec.ts This file houses all testing for the front end of our program and includes the following methods:

on page load I see a login button: tests that program generates a login button
on page load, i dont see the input box until login: tests that users cannot input/run commands without first logging in
improper command input returns 'command not found': tests that the proper response is returned when no known command is input
that Mode command changes output: tests that output switches between brief and verbose with each call of the mode command
Load with improper args: checks that loading without inputting filename and/or header bool returns the proper error message
Load empty csv/improper fileName: tests that loading an empty csv returns the
Load correct load/load switch: tests that the load command + proper args properly loads a file. Also tests to make sure that load works with consecutive calls
view without load: tests that a view command without first loading returns the proper response
successfull view: tests that view properly displays the conents of a loaded file
view different files: tests that only the currently loaded file is able to be viewed on screen
search with improper args/no file loaded: makes sure the proper response is returned if search has improper args/ no file loaded
search by index/index out of bounds: tests that searching by index returns the correct data. Also tests that indices outside the bounds of the dataset return the proper error response
search by column/(column doesn't exist/no headers): tests that searching by column name returns the proper response. Tests that the correct response is return when the column header does not exist. Also tests that the correct message is returned when a user tries to search by headers for a file that was stated to not have headers.

\*majority of tests functions test with both brief and verbose output. All commands called on multiple datasets

# How to

In order run our program you must first run mock using the npm start command from a command terminal. Once the server is initialized navigate to the specified link and click the login button. A command line should appear where you may input one of four different commands (specified below). After you have specified a command with it parameters click the submit button to run the command. Command parameters should be separated through the use of the & symbol. Once you are finished with commands you may press the logout button to log out.
In order to run the tests for this project navigate to the mock directory in a terminal and run the command 'npm run test'. This will run all of our programs tests. Alternatively 'run npx playwright show-report' to run the tests with additional details on test progression.

## Commands

Brackets represent an additional required argument
mode
load_file <"fileName> <"Has headers?>: (has headers = true/false)
view
search <"column name/index> <"search value>

Mode: switches the command response between brief (only results) and verbose (command line input followed by results).
load_file: laods a file based off of file name. Additionally sets up header status for potential searching
view: views a loaded file by printing a table of file data to the screen
search: searchs a loaded file by index/column name for a specified value

# Collaboration

_(state all of your sources of collaboration past your project partner. Please refer to the course's collaboration policy for any further questions.)_
