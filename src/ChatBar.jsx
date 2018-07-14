import React, { Component } from 'react';

class ChatBar extends Component {

  render() {

    //CHAT MESSAGE HANDLER
    const onKeyUp = evt => {
      evt.preventDefault();
      if(evt.keyCode === 13) {

        const content = evt.target.value;
        let username = this.props.currentUser;
        let messageTime = Date.now();

        if(this.props.currentUser === "") {
          username = this.props.anonymous;
        }

        let newMessage = {
          username: username,
          content: content,
          messageTime: messageTime,
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
        let messageTime = Date.now();


        if (this.props.currentUser === "") {
          currentUser = this.props.anonymous;
        }

        const name = {
          oldUsername: currentUser,
          newUsername: evt.target.value,
          messageTime: messageTime,
          type: "postNotification"
        };

        this.props.changeUserName(evt.target.value);
        this.props.message.onopen(name);
      }
    };

    // COLOR MENU HANDLER
    const onClick = evt => {
      evt.preventDefault();
      this.props.colorMenu();
    }

    // PREFERENCES HANDLER
    const onPref = evt => {
      evt.preventDefault();
      this.props.preferencesMenu();
    }

    return (
      <footer className="chatbar">
        <input className="preferences-button"
          onClick={onPref}
          type="image"
          src="build/preferences.png"
          value="" />
        <input className="color-button"
          id="color-button"
          onClick={onClick}
          type="image"
          src="build/color.png"
          style={{backgroundColor:this.props.color}}
          value="" />
        <input className="chatbar-username"
          onKeyDown={onKeyDown}
          id="username"
          defaultValue={this.props.currentUser}
          placeholder={this.props.anonymous} />

        <input className="chatbar-message"
          onKeyUp={onKeyUp}
          placeholder="Type a message and hit ENTER"  />
      </footer>
    );
  }
}


export default ChatBar;
