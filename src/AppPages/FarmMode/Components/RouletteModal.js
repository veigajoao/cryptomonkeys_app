import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

import "./Roulette.css"

import ModalHeaderBg from "../../../assets/roulette/header_bg/fire.png";
import PossibleTargets from "../../../assets/roulette/level_places/possible_targets.png";
import Work from "../../../assets/roulette/level_places/work.png";

import ButtonPlaces from "../../../assets/roulette/level_places/button_place_level.png";
import Level1Places from "../../../assets/roulette/level_places/level_1.png";
import Level2Places from "../../../assets/roulette/level_places/level_2.png";

import Level1NFT from "../../../assets/roulette/nft_level/lvl1.png";
import Level2NFT from "../../../assets/roulette/nft_level/lvl2.png";

import CaveName from "../../../assets/roulette/place_names/cave.png";
import ForestName from "../../../assets/roulette/place_names/forest.png";
import FarmName from "../../../assets/roulette/place_names/farm.png";
import CastleName from "../../../assets/roulette/place_names/castle.png";
import Office1Name from "../../../assets/roulette/place_names/office.png";
import Office2Name from "../../../assets/roulette/place_names/company.png";
import SpaceName from "../../../assets/roulette/place_names/spaceship.png";
import MarsName from "../../../assets/roulette/place_names/mars.png";

import SampleMonkey from "../../../assets/roulette/monkeys/King.png"

import Cave from "../../../assets/establishments/Cave.jpg";
import Forest from "../../../assets/establishments/Forest.jpg";
import Farm from "../../../assets/establishments/Farm.jpg";
import Castle from "../../../assets/establishments/Castle.jpg";
import Office1 from "../../../assets/establishments/Office1.jpg";
import Office2 from "../../../assets/establishments/Office2.jpg";
import Space from "../../../assets/establishments/Space.jpg";
import Mars from "../../../assets/establishments/Mars.jpg";

const getEstablishments = (monkeyType) => {
    let establishmentsMap = {
        "1": ["cave-transition", Cave, Forest, CaveName, ForestName],
        "2": ["cave-transition", Cave, Forest, CaveName, ForestName],
        "3": ["cave-transition", Cave, Forest, CaveName, ForestName],
        "4": ["cave-transition", Cave, Forest, CaveName, ForestName],
        "5": ["cave-transition", Farm, Castle, FarmName, CastleName],
        "6": ["cave-transition", Farm, Castle, FarmName, CastleName],
        "7": ["cave-transition", Farm, Castle, FarmName, CastleName],
        "8": ["office-transition", Office1, Office2, Office1Name, Office2Name],
        "9": ["office-transition", Office1, Office2, Office1Name, Office2Name],
        "10": ["space-transition", Space, Mars, SpaceName, MarsName],
        "11": ["space-transition", Space, Mars, SpaceName, MarsName],
    };
    return establishmentsMap[monkeyType];
}

const RouletteModal = (props) => {

    const { isOpen, closeModal, monkeyType, levelNft, gameStatus, playGame } = props;

    let establishments = getEstablishments(monkeyType);

    // let animationName = shouldAnimate ? establishments[0] : "noAnimation";

    let NFTLevelText = levelNft === "1" ? Level1NFT : Level2NFT;

    let level1Animation;
    let level2Animation;
    let workButtonInactive;

    if (gameStatus === "preGame") {
        level1Animation = "not-won";
        level2Animation = "not-won";
        workButtonInactive = false;
    } else if (gameStatus === "playing") {
        level1Animation = "lvl1_transition";
        level2Animation = "lvl2_transition";
        workButtonInactive = true;
    } else if (gameStatus === "game1won") {
        level1Animation = "game-won";
        level2Animation = "not-won";
        workButtonInactive = true;
    } else if (gameStatus === "game2won") {
        level1Animation = "not-won";
        level2Animation = "game-won";
        workButtonInactive = true;
    }

    const toggle = () => {
        closeModal()
    }

    return (
        <>
    <Modal isOpen={isOpen} toggle={toggle} backdrop={true} className="modal-lg modal-dialog-centered"
    style={{width: "60vw", height: "80vh", backgroundColor: "rgba(0, 0, 0, 0)"}}
    >

    <ModalBody className="gx-0 p-0">
        <Row className="text-center gx-0" style={{width: "100%"}}>
            <Col xs="12">
                <div 
                    className="d-flex justify-content-evenly align-items-end"
                    style={{
                        backgroundImage: `url(${ModalHeaderBg})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        color: "white", borderColor: "#561473",
                        height: "90px"
                    }}
                >
                    <img style={{height: "200px"}} src={SampleMonkey} alt={""}/>
            
                </div>

                <div
                className="position-absolute top-0 end-0 text-center d-flex justify-content-center align-items-center rounded"
                style={{
                    background: `url(${ButtonPlaces})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "15%",
                    height: "10%"
                }}
                >
                    <img style={{width: "60%"}} src={NFTLevelText} alt={""}/>
                    <span className="visually-hidden">img</span>
                </div>
                
            </Col>
        </Row>
        <Row className="text-center gx-0" style={{width: "100%"}}>
            <Col xs="12">
                <div 
                    style={{
                        background: "rgb(255,204,0)",
                        background: "linear-gradient(180deg, rgba(255,204,0,1) 34%, rgba(255,51,0,1) 65%)"
                    }}
                >
                    <img className="mt-3 mb-3" style={{width: "30%"}} src={PossibleTargets} alt={""}/>
                </div>
            </Col>
        </Row>

        <Row className="text-center gx-0">
            <Col xs="12">
                
                <div style={{
                    color: "white",
                    background: "linear-gradient(350deg, rgba(153,102,0,1) 34%, rgba(153,0,153,1) 65%)"
                    }}>
                
                    
                    <div className="d-flex justify-content-evenly align-items-center">
                        
                    <div className="d-flex flex-column justify-content-evenly align-items-center">
                            <Card className={`mb-1 mt-3 p-2 box-shadow-est`} style={{
                                width: "80%", color: "white",
                                animation: `${level1Animation} infinite 3s linear`
                                }}>
                                <div
                                className="position-absolute top-0 end-0 text-center d-flex justify-content-center align-items-center"
                                style={{
                                    background: `url(${ButtonPlaces})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    width: "30%",
                                    height: "20%"
                                }}
                                >
                                    <img style={{width: "80%"}} src={Level1Places} alt={""}/>
                                    <span className="visually-hidden">img</span>
                                </div>
                                <CardImg top src={establishments[1]} alt="establishment lvl 1" />
                                <CardBody className="text-center">
                                    <img src={establishments[3]} alt={""}/>
                                </CardBody>
                            </Card>
                        </div>

                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                            <Card className={`mb-1 mt-3 p-2 box-shadow-est ${level2Animation}`} style={{
                                width: "80%", color: "white",
                                animation: `${level2Animation} infinite 3s linear`
                                }}>
                                <div
                                className="position-absolute top-0 end-0 text-center d-flex justify-content-center align-items-center"
                                style={{
                                    background: `url(${ButtonPlaces})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    width: "30%",
                                    height: "20%"
                                }}
                                >
                                    <img style={{width: "80%"}} src={Level2Places} alt={""}/>
                                    <span className="visually-hidden">img</span>
                                </div>
                                <CardImg top src={establishments[2]} alt="establishment lvl 1" />
                                <CardBody className="text-center">
                                    <img src={establishments[4]} alt={""}/>
                                </CardBody>
                            </Card>
                        </div>
                                
                    </div>
                    
                    <button style={{
                        background: "rgb(255,204,0)",
                        background: "linear-gradient(180deg, rgba(255,204,0,1) 34%, rgba(255,51,0,1) 65%)", 
                        border: "0",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                        width: "200px"
                    }} className="rounded mt-3 mb-3" 
                    disabled={workButtonInactive}
                    onClick={playGame}>WORK</button>

                </div>

            </Col>
        </Row>
    </ModalBody>

    </Modal>
    </>
    );
}

export default RouletteModal;
