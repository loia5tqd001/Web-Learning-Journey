import React, { useState } from "react";

import Toolbar from "./components/Toolbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => !prevState);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop = sideDrawerOpen && <Backdrop click={backdropClickHandler} />;

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
