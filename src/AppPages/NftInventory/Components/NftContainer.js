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

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";

const NftContainer = () => {

    const [NFTList, setNFTList] = useState("load");

    const fetchData = async () => {
      if (window.isUserWallet !== true) {
        setNFTList("load");
      }
      const walletHash = await window.web3Instance.eth.getAccounts();
      const userBalance = await window.nftContract.methods.balanceOf(walletHash[0]).call();
      let dataList = [];

      console.log(walletHash[0]);
      console.log(userBalance);

      for (let i of Array(parseInt(userBalance)).keys()) {
        let nftIndex = await window.nftContract.methods.tokenOfOwnerByIndex(walletHash[0], i).call();
        let nftData = await window.nftContract.methods.getNftData(nftIndex).call();
        console.log(nftIndex);
        console.log(nftData);
        dataList.push({nftIndex, nftData});
      }
      setNFTList(dataList);
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
                      <Spinner type="grow" color="warning" children={false} /> 
                    </CardTitle>
                    <CardSubtitle style={{color: "white"}}>Loading you collection, please wait</CardSubtitle>
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
        NFTContent.push(<NFTCard monkeyType={NFT.nftData[0]} monkeyLevel={NFT.nftData[1]} tokenId={NFT.nftIndex}/>)
      }
    }

    useEffect(() => {
      if (NFTList === "load") {
        fetchData();
      }
    });

    return (
      <Fragment>
        <TransitionGroup style={{width: "100%", display: "flex", justifyContent: "center"}}>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row noGutters className="text-center" style={{width: "90%"}}>
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
      </Fragment>
    );
}

export default NftContainer;
