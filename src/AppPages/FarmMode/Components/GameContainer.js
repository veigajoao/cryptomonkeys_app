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
import RouletteModal from "./RouletteModal";

import { updateBetaBalance } from "../../../ethereum/web3";

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";

const getBaseFarm = (monkeyType) => {
    let farmMap = {
      "1": 4.55,
      "2": 5.05,
      "3": 5.25,
      "4": 5.55,
      "5": 7.25,
      "6": 8.30,
      "7": 9.25,
      "8": 11.10,
      "9": 15.30,
      "10": 19.75,
      "11": 23.95
    };
    return farmMap[monkeyType];
};

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

    const [openRouletteModal, setOpenRouletteModal] = useState(false);
    const [rouletteMonkeyType, setRouletteMonkeyType] = useState("1");
    const [rouletteMonkeyLevel, setRouletteMonkeyLevel] = useState("1");
    const [rouletteTokenData, setRouletteTokenData] = useState({});
    const [gameStatus, setGameStatus] = useState("preGame");
    const [timer, setTimer] = useState("");

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

    const playGame = async () => {
      let token_id = rouletteTokenData.nftIndex;
      const tokenData = rouletteTokenData;
      setGameStatus("playing");
      const walletHash = await window.web3Instance.eth.getAccounts();
      await window.gameContract.methods.baseMining(token_id).send({from: walletHash[0]});
      const gameResult = await window.gameContract.methods.getLastResult(token_id).call();

      //substitute for blockchain call later
      let baseFarm = getBaseFarm(rouletteTokenData.nftData[0]);

      if (tokenData.nftData[1] === "2") {
        setWon(true);
        let wonAmmount = gameResult === 2 ? 6 * baseFarm : baseFarm;
        setWonValue(wonAmmount);
        updateBetaBalance(wonAmmount);

      } else {
        if (gameResult === "2") {
          setWon(false)
        } else {
          setWon(true);
          setWonValue(baseFarm);
          updateBetaBalance(baseFarm)
        }
      }
      
      setTimeout(() => {

        if (gameResult === "1") {
          setGameStatus("game1won");
        } else if (gameResult === "2") {
          setGameStatus("game2won");
        }
      

        setTimeout(() => {
          setOpenModal(true);
        }, 1000);

      }, 5000);
      
    };

    const openGame = (NFT) => {
      console.log(NFT);
      setOpenRouletteModal(true);
      setRouletteTokenData(NFT);
      setRouletteMonkeyType(NFT.nftData[0]);
      setRouletteMonkeyLevel(NFT.nftData[1]);
      setGameStatus("preGame");
    }

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
        if (!NFT.nftData[3]) {
          continue;
        }
        let serialNumber = (parseInt(NFT.nftIndex) + 7834).toString();
        NFTCards.push(
          <NFTCard key={NFT.nftIndex} nft_id={NFT.nftIndex} monkeyType={NFT.nftData[0]} monkeyLevel={NFT.nftData[1]} tokenId={serialNumber} />
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
                    <CardTitle style={{color: "white"}}>
                      Time to farm $BNANA <br/>
                      Select your NFTs and farm with them!
                    </CardTitle>
                    <div className="divider" />
                  </CardBody>
                </Card>
              </Col>
              {NFTCards}
            </Row>
          </CSSTransition>
        </TransitionGroup>
        <GameModal closeModal={() => setOpenModal(false)} open={openModal} won={won} wonValue={wonValue}/>
        {/* <InstructionsModal closeModal={() => setOpenInstructionsModal(false)} open={openInstructionsModal}/> */}
        <RouletteModal closeModal={() => setOpenRouletteModal(false)} isOpen={openRouletteModal} monkeyType={rouletteMonkeyType} levelNft={rouletteMonkeyLevel} gameStatus={gameStatus} playGame={playGame}/>
      </Fragment>
    );
}

export default GameContainer;
