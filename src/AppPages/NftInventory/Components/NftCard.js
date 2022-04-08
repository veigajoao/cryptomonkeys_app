import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button
} from "reactstrap";

import caveMonkeyImg from "../../../assets/monkeys/CaveMonkey.png";
import gathererImg from "../../../assets/monkeys/CaveMonkey.png";
import hunterImg from "../../../assets/monkeys/Hunter.png";
import fireBenderImg from "../../../assets/monkeys/CaveMonkey.png";
import farmerImg from "../../../assets/monkeys/CaveMonkey.png";
import guardianImg from "../../../assets/monkeys/Guardian.png";
import kingImg from "../../../assets/monkeys/CaveMonkey.png";
import internImg from "../../../assets/monkeys/Intern.png";
import cryptoInvestorImg from "../../../assets/monkeys/CryptoInvestor.png";
import metaMonkeyImg from "../../../assets/monkeys/MetaMonkey.png";
import cyborgImg from "../../../assets/monkeys/Cyborg.png";

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

const getMonkeyImage = (code) => {
    const imgDict = {
        "1": caveMonkeyImg,
        "2": gathererImg,
        "3": hunterImg,
        "4": fireBenderImg,
        "5": farmerImg,
        "6": guardianImg,
        "7": kingImg,
        "8": internImg,
        "9": cryptoInvestorImg,
        "10": metaMonkeyImg,
        "11": cyborgImg
    };
    return imgDict[code];
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
        <>
            <span className="position-absolute top-0 translate-middle badge rounded-pill" style={{"left": "95%", "font-size": "1rem", background: rarityColor, color: "black"}}>
                {rarity}
                <span className="visually-hidden">rarity level</span>
            </span>
        </>
    );
}

const NFTCard = (props) => {

    const { monkeyType, monkeyLevel, tokenId } = props;

    const monkeyName = getMonkeyName(monkeyType);

    const monkeyImg = getMonkeyImage(monkeyType);

    const monkeyRarity = getMonkeyRarity(monkeyType);

    return (
        <Col md="4" sm="6" xs="12" style={{display: "flex", justifyContent: "center"}}>
            <Card className="m-2" style={{width: "80%", background: "#240940", color: "white"}}>
                {monkeyRarity}
                <CardImg top width="80%" src={monkeyImg} alt="Common Portal" />
                <CardBody>
                <CardTitle style={{color: "white"}}>{monkeyName}</CardTitle>
                <CardSubtitle>#{tokenId}</CardSubtitle>
                <CardSubtitle>Level: {monkeyLevel}</CardSubtitle>
                <Button disbled={monkeyLevel == "1"} color="primary">Upgrade monkey</Button>
                </CardBody>
            </Card>
        </Col>
    );
}

export default NFTCard;
