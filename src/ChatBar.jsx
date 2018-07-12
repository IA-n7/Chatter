import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    const onKeyUp = evt => {
      evt.preventDefault();
      if(evt.keyCode === 13) {
        //TRY NEXTSIBLING (MAYBE PREVIOUSSIBLING)
        // evt.target.elements.chatbar-username

        const content = evt.target.value;
        const username = document.getElementById("username").value;

        let newMessage = {
          username: username,
          content: content
        };

        this.props.addMessage.onopen(newMessage);
        evt.target.value = "";
      }
    };

    const onKeyDown = evt => {
        if(evt.keyCode === 13) {
        const name = evt.target.value;
        this.props.changeUserName(name);
      }
    };

    return (
      <footer className="chatbar">
        <input className="chatbar-username" onKeyDown={onKeyDown} id="username" defaultValue={this.props.currentUser}  />
        <input className="chatbar-message" onKeyUp={onKeyUp} placeholder="Type a message and hit ENTER"  />
      </footer>
    );
  }
}


export default ChatBar;
