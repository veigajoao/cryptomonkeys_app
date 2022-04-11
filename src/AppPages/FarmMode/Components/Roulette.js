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
import TimeMachine from "../../../assets/establishments/timeMachine.jpg";

const getEstablishments = (monkeyType) => {
    let establishmentsMap = {
        "1": ["cave-transition", Cave, Forest, TimeMachine],
        "2": ["cave-transition", Cave, Forest, TimeMachine],
        "3": ["cave-transition", Cave, Forest, TimeMachine],
        "4": ["cave-transition", Cave, Forest, TimeMachine],
        "5": ["farm-transition", Farm, Castle, TimeMachine],
        "6": ["farm-transition", Farm, Castle, TimeMachine],
        "7": ["farm-transition", Farm, Castle, TimeMachine],
        "8": ["office-transition", Office1, Office2, TimeMachine],
        "9": ["office-transition", Office1, Office2, TimeMachine],
        "10": ["space-transition", Space, Mars, TimeMachine],
        "11": ["space-transition", Space, Mars, TimeMachine]
    };
    return establishmentsMap[monkeyType];
}

const Roulette = (props) => {

    const { monkeyType, animationDuration, shouldAnimate, result } = props;

    let establishments = getEstablishments(monkeyType);

    let animationName = shouldAnimate ? establishments[0] : "noAnimation";

    return (
        <Col xs="8" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Card className="mb-1 mt-2 border border-3" style={
                {animationName: animationName, animationDuration: animationDuration, 
                animationIterationCount: "infinite",
                backgroundImage: `url(${establishments[result]})`,
                backgroundPosition: "center",
                backgroundSize: "cover", color: "white", borderColor: "rgb(200,200,200, 0.5)", width: "50%"}}
            >
                <CardBody>
                    <div style={{ height: "270px"}}>
                    </div>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Roulette;
