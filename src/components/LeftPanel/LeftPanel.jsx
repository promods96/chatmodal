import React, { Component } from "react";
import style from "./LeftPanel.module.css";
import message from "../../assets/comment.png";
import menu from "../../assets/menu.png";
import stories from "../../assets/stories.png";
import ContactBar from "./../ContactBar/ContactBar";
import Avatar from "./../Avatar/Avatar";
import ThemeProvider from "./../ThemeProvider/ThemeProvider";
class LeftPanel extends Component {
  state = {};

  render() {
    const { userIds, userData } = this.props.userData;
    const { handleClick, theme } = this.props;
    const styles = {
      theme: theme.default,
    };
    //console.log(styles.theme, "verify1");
    return (
      <div className={style.container} style={styles.theme}>
        <div className={style.header}>
          <div className={style.header_1}>
            <Avatar
              size="32px"
              url="https://source.unsplash.com/user/erondu/80x80"
            />
            <div>
              <img src={stories} alt="ic1" className={style.icons} />
              <img src={message} alt="ic2" className={style.icons} />
              <img src={menu} alt="ic3" className={style.icons} />
            </div>
          </div>
          <div className={style.header_2}>
            <input
              type="text"
              className={style.inputsearch}
              placeholder="Search contact"
            />
          </div>
        </div>
        <div className={style.userlist}>
          {userIds.map((data, index) => {
            return (
              <ContactBar
                userId={data}
                userData={userData[data]}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ThemeProvider(LeftPanel);
