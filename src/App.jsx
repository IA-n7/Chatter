import React, { Component } from 'react';
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loading: true,
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
  }

  addMessage(message) {
      const messages = this.state.messages.concat(message)
      this.setState({messages: messages})

  }

  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     const messages = this.state.messages.concat(message)
  //     this.setState({messages: messages})
  //   }, 3000);
  // }

  render() {
    return (
      <div>

      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatter</a>
      </nav>

        <MessageList messages={this.state.messages} />

        <ChatBar currentUser={this.state.currentUser.name} addMessage={this.addMessage}/>

      </div>
    );
  }
}

export default App;
