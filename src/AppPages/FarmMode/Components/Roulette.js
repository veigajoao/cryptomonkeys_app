import React from "react";
import {
  Col,
  Card,
  CardBody,
} from "reactstrap";

import "./Roulette.css"

// import caveMonkeyImg from "../../../assets/monkeys/CaveMonkey.png";
// import gathererImg from "../../../assets/monkeys/Gatherer.png";
// import hunterImg from "../../../assets/monkeys/Hunter.png";
// import fireBenderImg from "../../../assets/monkeys/FireBender.png";
// import farmerImg from "../../../assets/monkeys/Farmer.png";
// import guardianImg from "../../../assets/monkeys/Guardian.png";
// import kingImg from "../../../assets/monkeys/King.png";
// import internImg from "../../../assets/monkeys/Intern.png";
// import cryptoInvestorImg from "../../../assets/monkeys/CryptoInvestor.png";
// import metaMonkeyImg from "../../../assets/monkeys/MetaMonkey.png";
// import cyborgImg from "../../../assets/monkeys/Cyborg.png";

// const getMonkeyImage = (code) => {
//     const imgDict = {
//         "1": caveMonkeyImg,
//         "2": gathererImg,
//         "3": hunterImg,
//         "4": fireBenderImg,
//         "5": farmerImg,
//         "6": guardianImg,
//         "7": kingImg,
//         "8": internImg,
//         "9": cryptoInvestorImg,
//         "10": metaMonkeyImg,
//         "11": cyborgImg
//     };
//     return imgDict[code];
// }

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
        "1": ["cave-transition", Cave, Forest],
        "2": ["cave-transition", Cave, Forest],
        "3": ["cave-transition", Cave, Forest],
        "4": ["cave-transition", Cave, Forest],
        "5": ["farm-transition", Farm, Castle],
        "6": ["farm-transition", Farm, Castle],
        "7": ["farm-transition", Farm, Castle],
        "8": ["office-transition", Office1, Office2],
        "9": ["office-transition", Office1, Office2],
        "10": ["space-transition", Space, Mars],
        "11": ["space-transition", Space, Mars]
    };
    return establishmentsMap[monkeyType];
}

const Roulette = (props) => {

    const { monkeyType, animationDuration, shouldAnimate, result } = props;

    let establishments = getEstablishments(monkeyType);

    let animationName = shouldAnimate ? establishments[0] : "noAnimation";

    // let monkeyImage = getMonkeyImage(monkeyType);

    return (
        <Col xs="12" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Card className="mb-1 mt-2" style={
                {animationName: animationName, animationDuration: animationDuration, 
                animationIterationCount: "infinite",
                width: "80%", backgroundImage: `url(${establishments[result]})`,
                backgroundSize: "cover", color: "white"}}
            >
                <CardBody>
                    <div style={{width: "100%", height: "350px"}}>

                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Roulette;
