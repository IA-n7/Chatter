import React, { Component } from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  currentUser: {name: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
                  messages: []
                  };
    this.addMessage = this.addMessage.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.socket = new WebSocket('ws://localhost:3001');
  }

  changeUserName(username) {
    this.setState({currentUser: {name: username}});
  }

  addMessage(message) {
    const messages = this.state.messages.concat(message);
    this.setState({messages: messages});
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    const ws = this.socket;
    ws.onopen = function (event) {
      ws.send(JSON.stringify(event));
    };
    ws.onmessage = (data) => {
      let message = JSON.parse(data.data);
      this.addMessage(message);
    };
   }

  render() {
    return (
      <div>

      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatter</a>
      </nav>

        <MessageList messages={this.state.messages} />

        <ChatBar changeUserName={this.changeUserName} currentUser={this.state.currentUser.name} addMessage={this.socket}/>

      </div>
    );
  }
}

export default App;
