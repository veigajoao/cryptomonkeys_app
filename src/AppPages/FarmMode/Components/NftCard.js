import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  Button
} from "reactstrap";

const getMonkeyName = (code) => {
    const nameDict = {
        "1": "Cave Monkey",
        "2": "Gatherer",
        "3": "Hunter",
        "4": "Firebender",
        "5": "Farmer",
        "6": "Guardian",
        "7": "King",
        "8": "Intern",
        "9": "Crypto Investor",
        "10": "Meta Monkey",
        "11": "Cyborg"
    };
    return nameDict[code];
}

const getMonkeyRarity = (code) => {
    const rarityDict = {
        "1": "Common",
        "2": "Common",
        "3": "Common",
        "4": "Common",
        "5": "Rare",
        "6": "Rare",
        "7": "Rare",
        "8": "Epic",
        "9": "Epic",
        "10": "Legendary",
        "11": "Legendary"
    };

    const rarityColorDict = {
        "Common": "grey",
        "Rare": "gold",
        "Epic": "purple",
        "Legendary": "red"
    };

    const rarity = rarityDict[code];
    const rarityColor = rarityColorDict[rarity];

    return (
        <span className="position-absolute top-50 translate-middle badge rounded-pill" style={{"fontSize": "1rem", background: rarityColor, color: "black"}}>
                {rarity}
                <span className="visually-hidden">rarity level</span>
        </span>
    );
}

const NFTCard = (props) => {

    const [counter, setCounter] = useState(0);
    const [timeWork, setTimeWork] = useState(0);
    const [missingTime, setMissingTime] = useState(0);
    const [canWork, setCanWork] = useState(true);

    const { monkeyType, monkeyLevel, tokenId, playGame } = props;

    const monkeyName = getMonkeyName(monkeyType);

    const monkeyRarity = getMonkeyRarity(monkeyType);

    const goWork = () => {
        if (canWork) {
            playGame();
            setCanWork(false);
            let now = new Date()
            let nowSeconds = parseInt(now.getTime() / 1000)
            setTimeWork(nowSeconds + 28800);
        }
    }

    const fetchTimeToWork = async () => {
     //implement for real game version   
    }

    useEffect(() => {
        if (!canWork) {
            let now = new Date()
            let nowSeconds = now.getTime() / 1000
            setMissingTime(parseInt(timeWork - nowSeconds));
            setCounter(counter + 1);
        }
    }, [timeWork, canWork, missingTime, counter])

    let workStatus;
    if (canWork) {
        workStatus = (
            <>Ready to work</>
        )
    } else {
        let hours = parseInt(missingTime / 3600);
        let minutes = parseInt((missingTime % 3600) / 60);
        let seconds = parseInt(missingTime % 60);

        if (minutes < 10) {
            minutes = "0" + minutes.toString();
        }
        if (seconds < 10) {
            seconds = "0" + seconds.toString();
        }

        workStatus = (
            <>Ready in {hours}:{minutes}:{seconds}</>
        )
    }

    return (
        <Col xs="12" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                  <CardBody>
                    <Row className="text-center gx-0">
                            <Col xs="2" style={{display: "flex", justifyContent: "left"}}>
                                #{tokenId}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "left"}}>
                                {monkeyName}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center"}}>
                                {monkeyRarity}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center"}}>
                                Level: {monkeyLevel}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center"}}>
                                {workStatus}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center"}}>
                                <Button disabled={!canWork} onClick={goWork} color="primary">WORK!</Button>
                            </Col>
                            
                    </Row>
                  </CardBody>
            </Card>
        </Col>
    );
}

export default NFTCard;
