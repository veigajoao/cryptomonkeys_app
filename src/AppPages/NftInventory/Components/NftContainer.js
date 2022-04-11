import React, { Fragment, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Spinner
} from "reactstrap";

import NFTCard from "./NftCard";
import UpgradeModal from "./UpgradeModal";

import { upgradeCost } from "../../../ethereum/web3";

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";

const NftContainer = () => {

    const [NFTList, setNFTList] = useState("load");
    const [openModal, setOpenModal] = useState(false);
    const [NFTUpgradeData, setNFTUpgradeData] = useState({});
    const [NFTProcessPhase, setNFTProcessPhase] = useState(0);

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

    const upgradeNftRequest = async (nftData) => {
      setNFTProcessPhase(0);
      setOpenModal(true);
      setNFTUpgradeData(nftData);
      console.log(openModal);
    };

    const upgradeNftAccept = async () => {
      console.log("b");
      setNFTProcessPhase(1);
      console.log(NFTProcessPhase);
      console.log("c");
      const walletHash = await window.web3Instance.eth.getAccounts();
      console.log(walletHash);
      try {
        await window.bnanaContract.methods.approve(window.nftContract.options.address, window.web3Instance.utils.toWei(upgradeCost, "ether")).send({
          from: walletHash[0]
        });
        await window.nftContract.methods.upgradeNft(walletHash[0], NFTUpgradeData.tokenId).send({
          from: walletHash[0]
        });
        setNFTProcessPhase(2);
      } catch (err) {
        console.log(err)
        setNFTProcessPhase(3);
      }
    };

    let NFTContent;
    if (!window.isUserWallet) {
      NFTContent = (
        <Col md="12">
              <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
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
      NFTContent = (
          <Col md="12">
                <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
                  <CardBody>
                    <CardTitle style={{color: "white"}}>
                      <Spinner type="grow" color="warning" /> 
                    </CardTitle>
                    <CardSubtitle style={{color: "white"}}>Loading your collection, please wait</CardSubtitle>
                  </CardBody>
                </Card>
          </Col>
      )
    } else if (NFTList.length === 0) {
      NFTContent = (
          <Col md="12">
                <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
                  <CardBody>
                    <CardTitle style={{color: "white"}}>
                      Oh no, it seems that you don't have any cryptomonkeys NFT yet... <br/>
                      Buy your first in the portals page!
                    </CardTitle>
                  </CardBody>
                </Card>
          </Col>
      )
    } else {
      NFTContent = [];
      for (const NFT of NFTList) {
        if (!NFT.nftData[3]) {
          continue;
        }
        let serialNumber = (parseInt(NFT.nftIndex) + 7834).toString();
        NFTContent.push(
          <NFTCard upgradeNftRequest={() => upgradeNftRequest({tokenId: NFT.nftIndex, nftData: NFT.nftData})} key={NFT.nftIndex} monkeyType={NFT.nftData[0]} monkeyLevel={NFT.nftData[1]} tokenId={serialNumber}/>
        );
      }
    }

    return (
      <Fragment>
        <TransitionGroup style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row className="text-center gx-0" style={{width: "90%"}}>
              <Col md="12">
                <Card className="main-card mb-3 mt-3" style={{background: "#561473"}}>
                  <CardBody>
                    <CardTitle style={{color: "white"}}>Your NFT Collection</CardTitle>
                    <div className="divider" />
                  </CardBody>
                </Card>
              </Col>
              {NFTContent}
            </Row>
          </CSSTransition>
        </TransitionGroup>
      <UpgradeModal upgradeNftAccept={upgradeNftAccept} closeModal={() => setOpenModal(false)} open={openModal} NFTUpgradeData={NFTUpgradeData} NFTProcessPhase={NFTProcessPhase}/>
      </Fragment>
    );
}

export default NftContainer;
