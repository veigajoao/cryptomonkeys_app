import React from "react";
import cx from "classnames";

import { connect } from "react-redux";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HeaderLogo from "../AppLogo";
import MMButton from "./Web3Components/MMButton";
import BalanceButton from "./Web3Components/BalanceButton";
import LockedBalanceButton from "./Web3Components/LockedBalanceButton";


class Header extends React.Component {

  rerenderParentCallback = () => {
    this.forceUpdate();
  }

  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <>
        <TransitionGroup>
          <CSSTransition component="div"
            className={cx("app-header", "text-header-light", headerBackgroundColor, {
              "header-shadow": enableHeaderShadow,
            })}
            appear={true} timeout={1500} enter={false} exit={false}>
            <div>
              <HeaderLogo />
              <div className={cx("app-header__content", {
                  "header-mobile-open": enableMobileMenuSmall,
                })}>
                <div className="app-header-left">
                </div>
                <div className="app-header-right">
                  <LockedBalanceButton/>
                  <BalanceButton/>
                  <MMButton rerenderParentCallback={this.rerenderParentCallback}/>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
