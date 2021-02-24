import "./Cover.css";
import AppHeader from "./Components/AppHeader";
import AppMainBody from "./Components/AppMainBody";
import AppFooter from "./Components/AppFooter";

function Cover() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <AppHeader />
        <AppMainBody />
        <AppFooter />
      </div>
    </div>
  );
}

export default Cover;
