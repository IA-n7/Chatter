import React, { Component } from 'react';
import Message from "./Message.jsx";


class MessageList extends Component {
  render() {

    //LIST ALL MESSAGES
    const listMessages = this.props.messages.map((messages) =>
      <Message key={messages.id} messages={messages} />
    );

    return (
      <main className="messages">
        {listMessages}
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    );
  }
}


export default MessageList;
