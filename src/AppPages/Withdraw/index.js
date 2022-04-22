import React, { useState } from "react";

// Layout
import AppHeader from "../../Layout/AppHeader";
import AppSidebar from "../../Layout/AppSidebar";

// Internal components
import Withdraw from "./Components/Withdraw";

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const Portals = ({ match }) => {

  const forceUpdate = useForceUpdate();

  return (
    <>
      <AppHeader forceUpdate={() => forceUpdate()}/>
      <div className="app-main">
        <AppSidebar />
        <div className="app-main__outer">
          <div className="app-main__inner p-0">
            <Withdraw/>
          </div>
        </div>
      </div>
    </>
  )
};

export default Portals;
