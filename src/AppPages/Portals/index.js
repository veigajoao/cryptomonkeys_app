import React, { useState } from "react";

// Layout
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions";

// Internal components
import BuyBoxes from "./Components/BuyBoxes";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const Portals = ({ match }) => {

  const forceUpdate = useForceUpdate();

  return (
    <>
      <ThemeOptions />
      <AppHeader forceUpdate={() => forceUpdate()}/>
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner p-0">
            <BuyBoxes/>
          </div>
        </div>
      </div>
    </>
  )
};

export default Portals;
