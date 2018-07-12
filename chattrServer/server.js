// server.js

const express = require('express');
const SocketServer = require('ws');
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer.Server({ server });

wss.broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    // if (client !== ws && client.readyState === SocketServer.OPEN) {
      client.send(data);
    // }
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', function incoming(data) {
    let message = JSON.parse(data);

    switch(message.type) {

    case "postMessage":
      message['id'] = uuidv4();
      message.type = "incomingMessage"
      let output = JSON.stringify(message);
      wss.broadcast(output, ws);
      break;

    case "postNotification":
      message['id'] = uuidv4();
      message.type = "incomingNotification"
      let output2 = JSON.stringify(message);
      wss.broadcast(output2, ws);
      break;

    default:
      // throw new Error("Unknown event type " + data.type);
    }
  });


  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});
