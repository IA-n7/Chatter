import React, { Component } from 'react';


class Message extends Component {
  render() {

    //BUILD MESSAGE CONTAINERS BASED ON TYPE OF MESSAGE
    if(this.props.messages.type === "incomingMessage") {
      return (
        <div className="message">
          <span className="message-username" id="name-color">{this.props.messages.username}</span>
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
    if(this.props.messages.type === "incomingClientConnected") {
      return (
        <div className="message">
          <span className="message-connected">{this.props.messages.content}</span>
        </div>
      );
    }
    if(this.props.messages.type === "incomingClientDisconnected") {
      return (
        <div className="message">
          <span className="message-disconnected">{this.props.messages.content}</span>
        </div>
      );
    }
  }
}


export default Message;
