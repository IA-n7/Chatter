const express = require('express');
const SocketServer = require('ws');
const uuidv4 = require('uuid/v4');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer.Server({ server });

wss.broadcast = (data, ws) => {
  wss.clients.forEach(client => {
    if (client.readyState === SocketServer.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  let totalClients = {
    total: wss.clients.size,
    type: "incomingClientConnected",
    id: uuidv4()
  };
  wss.broadcast(JSON.stringify(totalClients), ws)

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
    }
  });


  ws.on('close', () => {
    console.log('Client disconnected');
    totalClients.total = wss.clients.size;
    totalClients.type = "incomingClientDisconnected"
    totalClients.id = uuidv4();
    wss.broadcast(JSON.stringify(totalClients), ws)
  });
});
