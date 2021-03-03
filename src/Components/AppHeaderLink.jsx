import React from "react";

class AppHeaderLink extends React.Component {
  render() {
    return (
      <a className="nav-link" href="#">
        {this.props.name}
      </a>
    );
  }
}

export default AppHeaderLink;
