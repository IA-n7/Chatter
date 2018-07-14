import React, { Component } from 'react';
import Message from "./Message.jsx";


class MessageList extends Component {
  render() {

    // COLOR MENU CLOSING HANDLER
    const onClose = evt => {
      evt.preventDefault();
      this.props.colorMenu();
    }

    // CHANGE COLOR HANDLER
    const onColor = evt => {
      evt.preventDefault();
      this.props.changeColor(evt.target.id);
      this.props.colorMenu();
      document.getElementById("color-button").style.backgroundColor = evt.target.id;
    }

    // TIMESTAMP HANDLER
    const onTimestamp = evt => {
      evt.preventDefault();
      this.props.showTimestamps();
      this.props.colorMenu();

    }

    //LIST ALL MESSAGES
    const listMessages = this.props.messages.map((messages) =>
      <Message key={messages.id}
        messages={messages}
        calculateTimeSince={this.props.calculateTimeSince}
        timestampDisplay={this.props.timestampDisplay}/>
    );

    return (
      <main className="messages">

        {listMessages}

        <div className="bg-modal"
            style={{display: this.props.preferencesDisplay}}>
          <div className="modal-preferences">
          <input className="close"
            onClick={onClose}
            type="submit"
            value="+" />
          <form className="preferences-box">
            <span className="preferences-timestamps">Timestamps  </span>
            <input className="preferences-choice"
                    onClick={onTimestamp}
                    type="submit"
                    value=""/>
          </form>
          </div>
        </div>

        <div className="bg-modal"
            style={{display: this.props.display}}>
          <div className="modal-color">
          <input className="close"
            onClick={onClose}
            type="submit"
            value="+" />
          <form className="color-box">
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="rebeccapurple"
                    style={{color: "rebeccapurple"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="royalblue"
                    style={{color: "royalblue"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="lightseagreen"
                    style={{color: "lightseagreen"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="lawngreen"
                    style={{color: "lawngreen"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="darkgreen"
                    style={{color: "darkgreen"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="darkgoldenrod"
                    style={{color: "darkgoldenrod"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="gold"
                    style={{color: "gold"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="orange"
                    style={{color: "orange"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="orangered"
                    style={{color: "orangered"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="maroon"
                    style={{color: "maroon"}}/>
            <input className="color-choice"
                    onClick={onColor}
                    type="submit"
                    value=""
                    id="saddlebrown"
                    style={{color: "saddlebrown"}}/>
          </form>
          </div>
        </div>
      </main>
    );
  }
}


export default MessageList;
