import React, { Component } from "react";
import style from "./ContactBar.module.css";

import Avatar from "./../Avatar/Avatar";
class ContactBar extends Component {
  state = {};
  render() {
    const { contact_name, dp } = this.props.userData;
    const { handleClick, userId } = this.props;

    return (
      <div
        className={style.container}
        onClick={() => {
          handleClick(userId);
        }}
      >
        <Avatar url={dp} />
        <div className={style.userdeets}>
          <p className={style.userdeets_name}>{contact_name}</p>
          <p className={style.userdeets_msg}>text message</p>
        </div>
      </div>
    );
  }
}

export default ContactBar;
