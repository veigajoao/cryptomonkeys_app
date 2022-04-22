import React, { Fragment, useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
  Spinner,
  Table
} from "reactstrap";

import commonPortal from "../../../assets/portals/common2.png";
import goldenPortal from "../../../assets/portals/golden2.png";
import MysticalPortal from "../../../assets/portals/mystical2.png";

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";
import OpenPortalModal from "./OpenPortalModal";

import {mintCostCommon, mintCostGolden, mintCostMystical} from "../../../ethereum/web3"

const getMintCost = (rarity) => {
  let mintMap = {
    "1": mintCostCommon,
    "2": mintCostGolden,
    "3": mintCostMystical
  };
  return mintMap[rarity];
}

const BuyBoxes = () => {

    const [lastWithdraw, setLastWithdraw] = useState(0);
    const [withdrawTime, setWithdrawTime] = useState(0);
    const [userBalance, setUserBalance] = useState(0);
    const [blockchainNow, setBlockchainNow] = useState(0);
    const [needFetch, setNeedFetch] = useState("true");
    const [openModal, setOpenModal] = useState(true);

    const fetchBalance = async () => {
        if (window.isUserWallet) {
            setNeedFetch("load");
            const walletHash = await window.web3Instance.eth.getAccounts();
            const withdrawTiming = await window.gameContract.methods.withdrawalTime().call();
            const lastUserWithdraw = await window.gameContract.methods.lastWithdrawal(walletHash[0]).call();
            const LockedBalance = await window.gameContract.methods.userBalance(walletHash[0]).call();
            const now = await window.gameContract.methods.getNow().call();
            setBlockchainNow(now);
            setUserBalance(window.web3Instance.utils.fromWei(LockedBalance, "ether"));
            setLastWithdraw(lastUserWithdraw);
            setWithdrawTime(withdrawTiming);
            setNeedFetch("false");
          } else {
          setNeedFetch("true");
        }
    };

    useEffect(() => {
      if (needFetch === "true") {
        fetchBalance();
      }
    });

    const withdrawBalance = async () => {
      const walletHash = await window.web3Instance.eth.getAccounts();
      await window.gameContract.methods.withdrawalUserBalance().send({from: walletHash[0]});
      fetchBalance();
    }

    let internalContent;
    if (window.isUserWallet !== true) {
      internalContent = (
        <Row noGutters className="text-center mt-3">
          <Col xs="12" md="12" style={{display: "flex", justifyContent: "center"}}>
              <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                <CardBody>
                  <CardTitle style={{color: "white"}}>
                    <img src={metaMaskLogo} alt={""} className='me-3' style={{width: "50px", height: "auto"}}/>
                    Connect your wallet to see your locked balance
                  </CardTitle>
                </CardBody>
              </Card>
          </Col>
        </Row>
      )
    } else if (needFetch === "load") {
      internalContent = (
        <Row noGutters className="text-center mt-3">
          <Col xs="12" md="12" style={{display: "flex", justifyContent: "center"}}>
              <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                <CardBody>
                  <CardTitle style={{color: "white"}}>
                    <Spinner type="grow" color="warning" /> 
                  </CardTitle>
                  <CardSubtitle style={{color: "white"}}>Loading your balance, please wait</CardSubtitle>
                </CardBody>
              </Card>
          </Col>
        </Row>
      )
    } else {

      let timeToNext = parseInt(lastWithdraw) + parseInt(withdrawTime) - parseInt(blockchainNow);
      let days = Math.floor(timeToNext / 86400);
      let hours = Math.floor((timeToNext % 86400) / 3600) ;
      let minutes = Math.floor(((timeToNext % 86400) % 3600) / 60);

      // let percentageDone = ((parseInt(withdrawTime) - timeToNext) / parseInt(withdrawTime)) * 0.7;
      let percentageDone = ((parseInt(withdrawTime) - timeToNext) / parseInt(withdrawTime));
      let nowWithdraw = Math.round((percentageDone * parseInt(userBalance) * 0.7 + parseInt(userBalance) * 0.3)*100) / 100;
      internalContent = (
        <>
          <Row noGutters className="text-center mt-3">
            <p style={{color: "white"}}>
              You can withdraw your entire game balance every 14 days. If you choose to withdraw earlier, you'll
              lose part of your balance as a penalty.
            </p>
            <Table style={{color: "white"}}>
              <tbody>
                <tr>
                  <td>Locked Balance</td>
                  <td>{userBalance}</td>
                </tr>
                <tr>
                  <td>Time to next 100% withdraw</td>
                  <td>{days} Days, {hours} Hours and {minutes} Minutes</td>
                </tr>
                <tr>
                  <td>If you withdraw now you get</td>
                  <td>{nowWithdraw}</td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <Button onClick={() => withdrawBalance()} color="primary">Withdraw balance</Button>
        </>
      )
    }

    return (
      <Fragment>
        <TransitionGroup style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row noGutters className="text-center" style={{width: "90%"}}>
              <Col md="12">
                <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
                  <CardBody>
                    <CardTitle style={{color: "white"}}>Withdrawal your $BNANAS</CardTitle>
                    <div className="divider" />
                    {internalContent}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CSSTransition>
        </TransitionGroup>
        {/* <OpenPortalModal closeModal={() => setOpenModal(false)} open={openModal} /> */}
      </Fragment>
    );
}

export default BuyBoxes;
