import React from "react";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Applications = ({ match }) => (
  <>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner p-0">
          Cocô
        </div>
        <div className="app-wrapper-footer">
          <AppFooter />
        </div>
      </div>
    </div>
  </>
);

export default Applications;
