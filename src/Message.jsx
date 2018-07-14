import React, { Component } from 'react';


class Message extends Component {
  render() {
    //REGULAR EXPRESS FOR FINDING IMAGE EXTENSIONS
    let regex = (/\.(gif|jp?g|png|svg|bmp|tiff|bat)$/i);

    // TIMESTAMP HANDLING
    let time = this.props.calculateTimeSince(this.props.messages.messageTime);


    //BUILD MESSAGE CONTAINERS BASED ON TYPE OF MESSAGE
    if(this.props.messages.type === "incomingMessage") {
      //DISPLAY IMAGE IF A URL WITH AN IMAGE EXTENSION IS FOUND
      if(regex.test(this.props.messages.content)) {
        return (
          <div className="message">
            <span className="message-username"
              style={{color:this.props.messages.color}}>
                {this.props.messages.username}
            </span>
            <img className="message-content" id="images" src={this.props.messages.content} alt="Image"/>
          </div>
        );
      }
      return (
        <div className="message">
          <span className="message-username"
            style={{color:this.props.messages.color}}>
              {this.props.messages.username}
          </span>
          <span className="message-content">
            {this.props.messages.content}
          </span>
          <span className="message-time"
          style={{display: this.props.timestampDisplay}}>
            {time}
          </span>
        </div>
      );
    }

    if(this.props.messages.type === "incomingNotification") {
      return (
        <div className="message system">
          <span className="message-notification">
            {this.props.messages.oldUsername} changed their name to {this.props.messages.newUsername}
          </span>
        </div>
      );
    }

    if(this.props.messages.type === "incomingClientConnected") {
      return (
        <div className="message system">
          <span className="message-connected">
            {this.props.messages.content}
          </span>
        </div>
      );
    }

    if(this.props.messages.type === "incomingClientDisconnected") {
      return (
        <div className="message system">
          <span className="message-disconnected">
            {this.props.messages.content}
          </span>
        </div>
      );
    }

  }
}


export default Message;
