import React, { Component } from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
                  currentUser: {name: "Daniel"}, // optional. if currentUser is not defined, it means the user is Anonymous
                  messages: [
                    {
                      username: "Daniel",
                      content: "Has anyone seen my LIMITED EDITION BOIS??",
                      id: "n623bk"
                    },
                    {
                      username: "Anonymous",
                      content: "No, I think you lost them. You lost your BOIS, Dan. You lost them for good.",
                      id: "kfn32p"
                    }
                            ]
                  };
    this.addMessage = this.addMessage.bind(this);
    this.socket = new WebSocket('ws://localhost:3001');
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

        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.socket}/>

      </div>
    );
  }
}

export default App;
