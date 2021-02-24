import React from "react";
import AppFooterLinks from "./AppFooterLinks";

class AppFooter extends React.Component {
  render() {
    return (
      <footer class="mt-auto text-white-50">
        <p>
          Cover template for <AppFooterLinks name="Bootstrap" />, by{" "}
          <AppFooterLinks name="@mdo" />.
        </p>
      </footer>
    );
  }
}

export default AppFooter;
