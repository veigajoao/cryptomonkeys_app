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

    const [isCounterSet, setIsCounterSet] = useState(false);
    const [counter, setCounter] = useState(0);
    const [timeWork, setTimeWork] = useState(0);
    const [canWork, setCanWork] = useState(true);
    const [timeInterval, setTimeInterval] = useState(0)
    const [availableBalance, setAvailableBalance] = useState("0");
    const [initialTime, setInitialTime] = useState(0);

    const { monkeyType, monkeyLevel, tokenId, nft_id, forceUpdate } = props;

    const monkeyName = getMonkeyName(monkeyType);

    const monkeyRarity = getMonkeyRarity(monkeyType);

    const stakeNft = async () => {
        const walletHash = await window.web3Instance.eth.getAccounts();
        await window.gameContract.methods.baseMining(nft_id).send({from: walletHash[0]});
        setCounter(counter + 1);
    }

    const withdrawalNft = async () => {
        const walletHash = await window.web3Instance.eth.getAccounts();
        await window.gameContract.methods.withdrawalUserBalance(nft_id).send({from: walletHash[0]});
        setCanWork(true);
        forceUpdate();
    }

    const updateBalance = async () => {
        const balance = await window.gameContract.methods.getAvailableBalance(nft_id).call();
        setAvailableBalance(window.web3Instance.utils.fromWei(balance, "ether"));
    }

    // const getTime = async () => {
    //     let baseSalary = await window.gameContract.methods.baseSalary(monkeyType).call();
    //     let multiplier = await window.gameContract.methods.lvl2Multiplier().call()
    //     let salary = monkeyLevel === "2" ? baseSalary * multiplier : baseSalary;
    //     let timeInterval = await window.gameContract.methods.waitPeriod().call();
    //     let ethereumNow = await window.gameContract.methods.getNow().call();
    //     let nftNow = await window.gameContract.methods.lastMiningMapping(nft_id).call();
    // }

    useEffect(() => {
        if (!canWork) {
            if (!isCounterSet) {
                setIsCounterSet(true);
                setInterval(() => {
                    setCounter(counter + 1);
                }, 1000);
                updateBalance();
            }
        } else {
            const fetchTimeToWork = async () => {
                let lastMine = await window.gameContract.methods.getLastMiningMapping(nft_id).call();
                let now = await window.gameContract.methods.getNow().call();
                let timeIntervalVar = await window.gameContract.methods.waitPeriod().call();
                let nextWork = parseInt(timeIntervalVar) - ( ( parseInt(now) - parseInt(lastMine) ) % parseInt(timeIntervalVar) );
                let availableBalanceVar = await window.gameContract.methods.getAvailableBalance(nft_id).call();


                let nowPc = new Date();
                let nowSeconds = nowPc.getTime() / 1000;
                if (parseInt(lastMine) !== 0) {
                    setCanWork(false);
                    setTimeWork(nextWork);
                    setTimeInterval(timeIntervalVar);
                    setAvailableBalance(window.web3Instance.utils.fromWei(availableBalanceVar, "ether"));
                    setInitialTime(nowSeconds);
                } else {
                    // setCanWork(true);
                    setAvailableBalance("0");
                }
            }
            fetchTimeToWork();
        }
    }, [timeWork, canWork, counter, isCounterSet, nft_id])

    let workStatus;
    let workButton;
    if (canWork) {
        workStatus = (
            <>Ready to work</>
        );
        workButton = <Button onClick={stakeNft} color="primary">WORK!</Button>
    } else {
        let now = new Date();
        let nowSeconds = now.getTime() / 1000;
        let elapsedTime = nowSeconds - initialTime;
        let missingTime = parseInt(timeWork - elapsedTime);

        if (missingTime >= 0) {
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
                <>Next farm in {hours}:{minutes}:{seconds}</>
            )
        } else {
            workStatus = (
                <>Next farm in 0:00:00</>
            )
            setCanWork(true);
        }
        
        workButton = <Button onClick={withdrawalNft} color="primary">COLLECT!</Button>

    }
    return (
        <Col xs="12" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Card className="mb-1 mt-2" style={{width: "80%", background: "#240940", color: "white"}}>
                  <CardBody>
                    <Row className="text-center gx-0">
                            <Col xs="2" style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                                #{tokenId}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "left", alignItems: "center"}}>
                                {monkeyName}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                {monkeyRarity}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                Level: {monkeyLevel}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                Farmed: {availableBalance}
                                <br/>
                                {workStatus}
                            </Col>
                            <Col xs="2" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                {workButton}
                            </Col>
                            
                    </Row>
                  </CardBody>
            </Card>
        </Col>
    );
}

export default NFTCard;
