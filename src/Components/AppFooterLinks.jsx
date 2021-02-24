import React from "react";

class AppFooterLinks extends React.Component {
  render() {
    return (
      <a href="https://getbootstrap.com/" class="text-white">
        {this.props.name}
      </a>
    );
  }
}

export default AppFooterLinks;
