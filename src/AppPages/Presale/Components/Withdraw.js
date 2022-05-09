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

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";

const Withdraw = () => {

    const [totalBalance, setTotalBalance] = useState("0");
    const [withdrawnBalance, setWithdrawnBalance] = useState("0");
    const [availableBalance, setAvailableBalance] = useState("0");
    const [nonAvailableBalance, setNonAvailableBalance] = useState("0");
    const [needFetch, setNeedFetch] = useState("true");

    const fetchBalance = async () => {
        if (window.isUserWallet) {
            setNeedFetch("load");
            const walletHash = await window.web3Instance.eth.getAccounts();
          
            const total = window.web3Instance.utils.fromWei(await window.presaleContract.methods.totalBuy(walletHash[0]).call(), "ether");
            const withdrawn = window.web3Instance.utils.fromWei(await window.presaleContract.methods.released(walletHash[0]).call(), "ether");
            const available = window.web3Instance.utils.fromWei(await window.presaleContract.methods.checkVested(walletHash[0]).call(), "ether");
            const nonAvailable = parseInt(total) - parseInt(withdrawn) - parseInt(available);

            setTotalBalance(total);
            setWithdrawnBalance(withdrawn);
            setAvailableBalance(available);
            setNonAvailableBalance(nonAvailable);
            
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
      await window.presaleContract.methods.releaseTokens().send({from: walletHash[0]});
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
                    Connect your wallet to see your vesting presale balance
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

      internalContent = (
        <>
          <Row noGutters className="text-center mt-3">
            <p style={{color: "white"}}>
              You can see the information regarding your presale BNANA purchases in here. Once your tokens'
              vesting period is over, they'll appear on the withdrawable amounts in the table below.
            </p>
            <Table style={{color: "white"}}>
              <tbody>
                <tr>
                  <td>Total presale purchase</td>
                  <td>{totalBalance}</td>
                </tr>
                <tr>
                  <td>Already released tokens</td>
                  <td>{withdrawnBalance}</td>
                </tr>
                <tr>
                  <td>Locked tokens</td>
                  <td>{nonAvailableBalance}</td>
                </tr>
                <tr>
                  <td>Withdrawable amount</td>
                  <td>{availableBalance}</td>
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
      </Fragment>
    );
}

export default Withdraw;
