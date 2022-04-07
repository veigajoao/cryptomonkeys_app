import React from "react";

// Layout
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

// Internal components
import BuyBoxes from "./Components/BuyBoxes";

const Applications = ({ match }) => (
  <>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner p-0">
          <BuyBoxes/>
        </div>
      </div>
    </div>
  </>
);

export default Applications;
