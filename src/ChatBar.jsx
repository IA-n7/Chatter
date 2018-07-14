import React, { Component } from 'react';

class ChatBar extends Component {

  render() {

    //CHAT MESSAGE HANDLER
    const onKeyUp = evt => {
      evt.preventDefault();
      if(evt.keyCode === 13) {

        const content = evt.target.value;
        let username = this.props.currentUser;

        if(this.props.currentUser === "") {
          username = this.props.anonymous;
        }

        let newMessage = {
          username: username,
          content: content,
          type: "postMessage",
          color: this.props.color
        };

        this.props.message.onopen(newMessage);
        evt.target.value = "";
      }
    };

    //USERNAME HANDLER
    const onKeyDown = evt => {
      if(evt.keyCode === 13) {

        let currentUser = this.props.currentUser;

        if (this.props.currentUser === "") {
          currentUser = this.props.anonymous;
        }

        const name = {
          oldUsername: currentUser,
          newUsername: evt.target.value,
          type: "postNotification"
        };

        this.props.changeUserName(evt.target.value);
        this.props.message.onopen(name);
      }
    };

    const onClick = evt => {
      evt.preventDefault();
      this.props.colorMenu();
    }

    return (
      <footer className="chatbar">
        <input className="chatbar-username"
          onKeyDown={onKeyDown}
          id="username"
          defaultValue={this.props.currentUser}
          placeholder={this.props.anonymous} />
        <input className="color-button"
          id="color-button"
          onClick={onClick}
          type="submit"
          value="Color" />
        <input className="chatbar-message"
          onKeyUp={onKeyUp}
          placeholder="Type a message and hit ENTER"  />
      </footer>
    );
  }
}


export default ChatBar;
