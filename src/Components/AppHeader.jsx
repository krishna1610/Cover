import React from "react";
import AppHeaderLinks from "./AppHeaderLinks";

class AppHeader extends React.Component {
  render() {
    return (
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Cover</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <AppHeaderLinks name="Features" />
            <AppHeaderLinks name="Contact" />
          </nav>
        </div>
      </header>
    );
  }
}

export default AppHeader;
