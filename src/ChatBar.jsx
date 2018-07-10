import React, { Component } from 'react';

function generateRandomString() {
  let randomString = "";
  let allPossibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    randomString += allPossibleCharacters.charAt(Math.floor(Math.random() * allPossibleCharacters.length));
  return randomString;
}


class ChatBar extends Component {
  render() {
    const onKeyUp = evt => {
      evt.preventDefault();
      if(evt.keyCode === 13) {

        const content = evt.target.value;
        // const usernameInput = evt.target.elements.chatbar-username;
        const id = generateRandomString();

        let newMessage = {
          username: "Anonymous",
          content: content,
          id: id
        }

        this.props.addMessage(newMessage);

       evt.target.value = "";
      }
    };

    return (
      <footer className="chatbar" onKeyUp={onKeyUp}>
        <input className="chatbar-username" defaultValue={this.props.currentUser}  />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER"  />
      </footer>
    );
  }
}


export default ChatBar;
