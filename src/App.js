import style from "./App.module.css";
import udata from "./user.json";
import React, { Component } from "react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { light, dark } from "./utils/theme";

import messageJson from "./message.json";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
class App extends Component {
  state = {
    activeID: null,
    userData: udata,
    showChat: false,
    messageData: messageJson,
    toggle: false,
  };
  handleContactClick = (uid) => {
    this.setState({ activeID: uid }, () => {
      this.setState({ showChat: true });
    });
  };
  handleMessage = (e, id) => {
    if (e.key === "Enter") {
      let { messageData } = this.state;
      let inputValue = e.currentTarget.value;
      let newMessage = Object.assign(
        {},
        { ...messageData },
        {
          [id]: {
            sender: messageData[id].sender.concat(inputValue),
            receiver: messageData[id].receiver,
          },
        }
      );
      this.setState({ messageData: newMessage }, () => {
        document.getElementById("messageinput").value = "";
      });
    }
  };
  handleToggle = (flag) => {
    this.setState({ toggle: flag });
  };
  render() {
    const { showChat, activeID, messageData, toggle } = this.state;
    const styles = {
      theme: !toggle ? light : dark,
    };
    return (
      <div className={style.parent}>
        <ToggleSwitch handleToggle={this.handleToggle} />
        <div className={style.container} style={styles.theme.default}>
          <div className={style.container_leftpanel}>
            <LeftPanel
              userData={udata}
              handleClick={this.handleContactClick}
              toggle={toggle}
            />
          </div>
          <div className={style.container_rightpanel}>
            {showChat ? (
              <ChatWindow
                userId={activeID}
                messageData={messageData[parseInt(activeID)]}
                handleMessage={this.handleMessage}
                toggle={toggle}
              />
            ) : (
              <div className={style.emptyscreen}>
                <h2>Select a contact to begin the chat</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
