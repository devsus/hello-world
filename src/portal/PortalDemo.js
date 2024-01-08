import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    //the following id is available on index.html
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
