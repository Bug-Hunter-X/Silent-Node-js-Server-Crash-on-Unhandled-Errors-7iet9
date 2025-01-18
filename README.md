# Silent Node.js Server Crash on Unhandled Errors

This repository demonstrates a common, yet insidious bug in Node.js applications: silent crashes due to unhandled errors in the request handling process.  The server will run but if a runtime error happens (like accessing a non-existent property of the request object) the server crashes without any informative logs. This makes debugging extremely difficult.

## Bug Description

The provided `bug.js` file contains a simple HTTP server.  The `bugSolution.js` contains a corrected version that handles errors gracefully.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository in your terminal.
3. Run `node bug.js`.
4. Attempt to trigger an error (e.g., try accessing request.nonExistentProperty).
5. Observe the server crashes silently without any error message in the console. This is the bug.
6. Run `node bugSolution.js` to see the corrected, error-handling version in action. 

## Solution

The solution involves using a `try...catch` block to handle potential errors within the request listener or attaching an `unhandledRejection` event listener.