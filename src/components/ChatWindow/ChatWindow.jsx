import React, { Component } from "react";
import style from "./ChatWindow.module.css";
import message from "../../assets/comment.png";
import menu from "../../assets/menu.png";
import stories from "../../assets/stories.png";
import Avatar from "./../Avatar/Avatar";
import ThemeProvider from "../ThemeProvider/ThemeProvider";
class ChatWindow extends Component {
  state = { userId: null, message: { sender: [], receiver: [] } };
  componentDidMount() {
    let { messageData, userId } = this.props;
    this.setState({
      userId: userId,
      message: Object.assign({}, messageData),
    });
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log(messageData, "checkmessage");
    const { messageData, userId = "" } = this.props;
    if (userId != prevProps.userId) {
      let { userId } = this.props;

      this.setState({
        userId: userId,
        message: Object.assign(
          {},
          messageData ? messageData : { sender: [], receiver: [] }
        ),
      });
    }

    if (messageData.sender.length != prevProps.messageData.sender.length) {
      console.log("message");
      this.setState({
        message: Object.assign({}, messageData),
      });
    }
  }
  render() {
    // console.log(this.props.theme, "from chat window");
    const { sender, receiver } = this.state.message;
    const { userId, handleMessage, theme, toggle } = this.props;
    const styles = {
      theme: theme.chatwindow,
      msgText: theme.msgText,
    };

    return (
      <div className={style.container} style={styles.theme}>
        <div className={style.header}>
          <Avatar
            size="32px"
            url="https://source.unsplash.com/collection/190727/32x32"
          />
          <span
            className={style.uname}
            style={{ color: !toggle ? "black" : "white" }}
          >
            Promod
          </span>
          <div>
            <img src={stories} alt="ic1" className={style.icons} />
            <img src={message} alt="ic2" className={style.icons} />
          </div>
        </div>

        <div className={style.bodysection}>
          {(sender.length > receiver.length ? sender : receiver).map(
            (data, index) => {
              return (
                <React.Fragment>
                  {sender[index] && (
                    <div className={style.sender_txt} style={styles.msgText}>
                      {sender[index]}
                    </div>
                  )}
                  {receiver[index] && (
                    <div className={style.receiver_txt} style={styles.msgText}>
                      {receiver[index]}
                    </div>
                  )}
                </React.Fragment>
              );
            }
          )}
        </div>
        <div className={style.chatarea}>
          <input
            id="messageinput"
            className={style.inputtext}
            placeholder="Type to begin"
            onKeyDown={(e) => {
              handleMessage(e, userId);
            }}
          />
        </div>
      </div>
    );
  }
}

export default ThemeProvider(ChatWindow);
