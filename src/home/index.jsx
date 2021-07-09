import React, { Component } from "react";
import Base from "../base";

export default class Home extends Component {
  state = {
    link: "https://hlukyamel.pythonanywhere.com/api/bookSearch/?ordering=-id",
    title: "Book List(Most Recent)",
  };
  render() {
    return (
      <Base
        linkFromParent={this.state.link}
        titleFromParent={this.state.title}
      />
    );
  }
}
