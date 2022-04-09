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
  Spinner
} from "reactstrap";

import commonPortal from "../../../assets/portals/common2.png";
import goldenPortal from "../../../assets/portals/golden2.png";
import MysticalPortal from "../../../assets/portals/mystical2.png";

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";
import OpenPortalModal from "./OpenPortalModal";

import {mintCostCommon, mintCostGolden, mintCostMystical} from "../../../ethereum/web3"

const BnanaContainer = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [bnanaBalance, setBnanaBalance] = useState("0");
    const [bnanaLockedBalance, setBnanaLockedBalance] = useState("0");


    const fetchData = async () => {
      if (window.isUserWallet !== true) {
        setNFTList("load");
        return "";
      }
      const walletHash = await window.web3Instance.eth.getAccounts();
      const userBalance = await window.nftContract.methods.balanceOf(walletHash[0]).call();
      let dataList = [];

      for (let i of Array(parseInt(userBalance)).keys()) {
        let nftIndex = await window.nftContract.methods.tokenOfOwnerByIndex(walletHash[0], i).call();
        let nftData = await window.nftContract.methods.getNftData(nftIndex).call();
        dataList.push({nftIndex, nftData});
      }
      setNFTList(dataList);
    };

    useEffect(() => {
      if (isLoading) {
        fetchData();
      }
    });

    let internalContent;
    if (window.isUserWallet !== true) {
      internalContent = (
        <Col xs="12" md="12" style={{display: "flex", justifyContent: "center"}}>
            <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
              <CardBody>
                <CardTitle style={{color: "white"}}>
                  <img src={metaMaskLogo} alt={""} className='me-3' style={{width: "50px", height: "auto"}}/>
                  Connect your wallet to see your NFT collection
                </CardTitle>
              </CardBody>
            </Card>
        </Col>
      )
    } else if (NFTList === "load") {
      internalContent = (
        <Col xs="12" md="12" style={{display: "flex", justifyContent: "center"}}>
            <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
              <CardBody>
                <CardTitle style={{color: "white"}}>
                  <Spinner type="grow" color="warning" /> 
                </CardTitle>
                <CardSubtitle style={{color: "white"}}>Loading your portals, please wait</CardSubtitle>
              </CardBody>
            </Card>
        </Col>
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
                    <CardTitle style={{color: "white"}}>Open your portals</CardTitle>
                    <div className="divider" />
                    <Row noGutters className="text-center mt-3">
                        {internalContent}
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CSSTransition>
        </TransitionGroup>
        <OpenPortalModal closeModal={() => setOpenModal(false)} open={openModal} tokenObject={tokenObject} />
      </Fragment>
    );
}

export default BnanaContainer;
