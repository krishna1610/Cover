import React from "react";
import AppFooterLink from "./AppFooterLink";

class AppFooter extends React.Component {
  render() {
    return (
      <footer class="mt-auto text-white-50">
        <p>
          Cover template for <AppFooterLink name="Bootstrap" />, by{" "}
          <AppFooterLink name="@mdo" />.
        </p>
      </footer>
    );
  }
}

export default AppFooter;
