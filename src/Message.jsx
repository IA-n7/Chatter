import React, { Component } from 'react';


class Message extends Component {
  render() {
    if(this.props.messages.type === "incomingMessage") {
      return (
        <div className="message">
          <span className="message-username">{this.props.messages.username}</span>
          <span className="message-content">{this.props.messages.content}</span>
        </div>
      );
    }
    if(this.props.messages.type === "incomingNotification") {
      return (
        <div className="message">
          <span className="message-notification">{this.props.messages.oldUsername} changed their name to {this.props.messages.newUsername}</span>
        </div>
      );
    }
  }
}


export default Message;
