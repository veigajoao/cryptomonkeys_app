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

const getMintCost = (rarity) => {
  let mintMap = {
    "1": mintCostCommon,
    "2": mintCostGolden,
    "3": mintCostMystical
  };
  return mintMap[rarity];
}

const BuyBoxes = () => {

    const [NFTList, setNFTList] = useState("load");
    const [openModal, setOpenModal] = useState(false);
    const [tokenObject, setTokenObject] = useState("approve");

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
      if (NFTList === "load") {
        fetchData();
      }
    });

    const buyPortal = async (rarity) => {
      const mintCost = getMintCost(rarity);
      const walletHash = await window.web3Instance.eth.getAccounts();
      await window.bnanaContract.methods.approve(window.nftContract.options.address, window.web3Instance.utils.toWei(mintCost, "ether")).send({from: walletHash[0]});
      await window.nftContract.methods.mintNft(walletHash[0], rarity).send({from: walletHash[0]});
      fetchData();
    }

    const openPortal = async (tokenObject) => {
      setTokenObject("approve");
      setOpenModal(true);
      const walletHash = await window.web3Instance.eth.getAccounts();
      await window.nftContract.methods.openNftBox(tokenObject.nftIndex).send({from: walletHash[0]});
      setTokenObject(tokenObject);
      fetchData();
    }

    const callOpenPortal = (rarityType) => {
      let tokenObject;
      for (let item of NFTList) {
        if (item.nftData[4] === rarityType ) {
          tokenObject = item;
        }
      }
      openPortal(tokenObject);
    };

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
    } else {
      let commonCount = 0;
      let goldenCount = 0;
      let mysticalCount = 0;
      for (const NFT of NFTList) {
        if (NFT.nftData[3]) {
          continue;
        }
        if (NFT.nftData[4] === "1") {
          commonCount += 1;
        } else if (NFT.nftData[4] === "2") {
          goldenCount += 1;
        } else if (NFT.nftData[4] === "3") {
          mysticalCount += 1;
        }
      }
      internalContent = (
        <>
          <Col xs="12" md="4" style={{display: "flex", justifyContent: "center"}}>
              <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "1.25rem"}}>
                  {commonCount}
                  <span className="visually-hidden">common portals</span>
                </span>
                <CardImg top width="80%" src={commonPortal} alt="Common Portal" />
                <CardBody>
                  <CardTitle style={{color: "white"}}>Common Portal</CardTitle>
                  <CardSubtitle>$BNANA {mintCostCommon}</CardSubtitle>
                  <Button disabled={commonCount === 0} onClick={() => callOpenPortal("1")} color="primary" className="me-2">Open portal</Button>
                  <Button onClick={() => buyPortal("1")} color="primary">Buy portal</Button>
                </CardBody>
              </Card>
          </Col>
          <Col xs="12" md="4" style={{display: "flex", justifyContent: "center"}}>
              <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "1.25rem"}}>
                  {goldenCount}
                  <span className="visually-hidden">golden portals</span>
                </span>
                <CardImg top width="80%" src={goldenPortal} alt="Common Portal" />
                <CardBody>
                  <CardTitle style={{color: "white"}} >Golden Portal</CardTitle>
                  <CardSubtitle>$BNANA {mintCostGolden}</CardSubtitle>
                  <Button disabled={goldenCount === 0} onClick={() => callOpenPortal("2")} color="primary" className="me-2">Open portal</Button>
                  <Button onClick={() => buyPortal("2")} color="primary">Buy portal</Button>
                </CardBody>
              </Card>
          </Col>
          <Col xs="12" md="4" style={{display: "flex", justifyContent: "center"}}>
              <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{"font-size": "1.25rem"}}>
                  {mysticalCount}
                  <span className="visually-hidden">mystical portals</span>
                </span>
                <CardImg top width="80%" src={MysticalPortal} alt="Common Portal" />
                <CardBody>
                  <CardTitle style={{color: "white"}}>Mystical Portal</CardTitle>
                  <CardSubtitle>$BNANA {mintCostMystical}</CardSubtitle>
                  <Button disabled={mysticalCount === 0} onClick={() => callOpenPortal("3")} color="primary" className="me-2">Open portal</Button>
                  <Button onClick={() => buyPortal("3")} color="primary">Buy portal</Button>
                </CardBody>
              </Card>
          </Col>
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

export default BuyBoxes;
