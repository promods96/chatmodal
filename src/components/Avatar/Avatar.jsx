import React, { Component } from "react";
import style from "./Avatar.module.css";
class Avatar extends Component {
  state = {};
  render() {
    const { url = "", size = "40px" } = this.props;

    return (
      <div>
        <img
          style={{ width: size, height: size }}
          className={style.avatar}
          src={url}
          alt="IC"
        />
      </div>
    );
  }
}

export default Avatar;
