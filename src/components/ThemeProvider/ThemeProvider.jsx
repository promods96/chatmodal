import React, { useState, Component } from "react";
import { light, dark } from "../../utils/theme";

const ThemeProvider = (WrappedComponent, flag) => {
  return class extends Component {
    state = { theme: light };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          theme={this.props.toggle ? dark : light}
        />
      );
    }
  };
};

export default ThemeProvider;
