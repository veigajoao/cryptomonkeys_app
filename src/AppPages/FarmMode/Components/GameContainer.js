import React, { Fragment, useState, useEffect } from "react";
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
import Roulette from "./Roulette";
import GameModal from "./GameModal";
import InstructionsModal from "./InstructionsModal";

import { updateBetaBalance } from "../../../ethereum/web3";

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";

const GameContainer = (props) => {

    const [NFTList, setNFTList] = useState("load");
    const [rouletteVars, setRouletteVars] = useState({
      tokenId: "none",
      monkeyType: "1",
      animationDuration: "0s",
      shouldAnimate: false,
      result: 3
    });

    const [openModal, setOpenModal] = useState(false);
    const [won, setWon] = useState(false);
    const [wonValue, setWonValue] = useState(0);

    const [openInstructionsModal, setOpenInstructionsModal] = useState(true);

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

    const playGame = async (tokenData) => {
      window.scrollTo(0, 0);
      setRouletteVars({
        tokenId: tokenData.nftIndex,
        monkeyType: tokenData.nftData[0],
        animationDuration: "3s",
        shouldAnimate: true,
        result: 1
      });

      //substitute for blockchain call later
      let seed = Math.random();
      let result = seed > 0.8 ? 2 : 1;
      let baseFarm = 1;
      
      console.log(props.bnanaBalance);

      if (tokenData.nftData[1] === "2") {
        setWon(true);
        let wonAmmount = result === 2 ? 2 * baseFarm : baseFarm;
        setWonValue(wonAmmount);
        updateBetaBalance(wonAmmount);

      } else {
        if (result === 2) {
          setWon(false)
        } else {
          setWon(true);
          setWonValue(baseFarm);
          updateBetaBalance(baseFarm)
        }
      }
      
      setTimeout(() => {
        setRouletteVars({
          tokenId: tokenData.nftIndex,
          monkeyType: tokenData.nftData[0],
          animationDuration: "5s",
          shouldAnimate: true,
          result: 1
        });
      }, 5000);
      setTimeout(() => {
        setRouletteVars({
          tokenId: tokenData.nftIndex,
          monkeyType: tokenData.nftData[0],
          animationDuration: "3s",
          shouldAnimate: false,
          result: result
        });
        setOpenModal(true);
      }, 7500);

    };

    let NFTCards;
    if (window.isUserWallet !== true) {
      NFTCards = (
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
      NFTCards = (
        <Col xs="12" md="12" style={{display: "flex", justifyContent: "center"}}>
            <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
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
      NFTCards = (
        <Col xs="12" md="12" style={{display: "flex", justifyContent: "center"}}>
            <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
              <CardBody>
                <CardTitle style={{color: "white"}}>
                  It looks like you don't own any CryptoMonkeys NFT's yet... It's time to buy some in the portals section!
                </CardTitle>
              </CardBody>
            </Card>
        </Col>
      )
    } else {
      NFTCards = [];
      for (const NFT of NFTList) {
        // if (!NFT.nftData[3]) {
        //   continue;
        // }
        let serialNumber = (parseInt(NFT.nftIndex) + 7834).toString();
        NFTCards.push(
          <NFTCard key={NFT.nftIndex} monkeyType={NFT.nftData[0]} monkeyLevel={NFT.nftData[1]} tokenId={serialNumber} playGame={() => playGame(NFT)}/>
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
                    <CardTitle style={{color: "white"}}>Time to farm $BNANA</CardTitle>
                    <div className="divider" />
                    <Row className="text-center mt-3 gx-0">
                        <Roulette monkeyType={rouletteVars.monkeyType} animationDuration={rouletteVars.animationDuration} shouldAnimate={rouletteVars.shouldAnimate} result={rouletteVars.result}/>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              {NFTCards}
            </Row>
          </CSSTransition>
        </TransitionGroup>
        <GameModal closeModal={() => setOpenModal(false)} open={openModal} won={won} wonValue={wonValue}/>
        <InstructionsModal closeModal={() => setOpenInstructionsModal(false)} open={openInstructionsModal}/>
      </Fragment>
    );
}

export default GameContainer;
