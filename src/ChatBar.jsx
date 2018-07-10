import React, { Component } from 'react';


class ChatBar extends Component {
  render() {
      const onSubmit = evt => {
        evt.preventDefault();
        const chatInput = evt.target.elements.chatbar-message;
        const usernameInput = evt.target.elements.chatbar-username;

        // CALL FUNCTION THAT WAS SENT, TODO/REPLACE
        // this.props.addTaskName(taskNameInput.value);

        chatInput.value = "";

    };

    return (
      <footer className="chatbar">
        <input className="chatbar-username" defaultValue={this.props.currentUser}  />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}


export default ChatBar;
