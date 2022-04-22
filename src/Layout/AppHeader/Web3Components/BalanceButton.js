import React, { useEffect, useState } from "react";

import { Button } from 'reactstrap';

import bnanaLogo from "../../../assets/metaMask/bnanaCase.png";

const BalanceButton = () => {
    
    const [balance, setBalance] = useState("none");

    const fetchBalance = async () => {
        if (window.isUserWallet) {
            const walletHash = await window.web3Instance.eth.getAccounts();
            const bnanaBalance = await window.bnanaContract.methods.balanceOf(walletHash[0]).call();
            setBalance(window.web3Instance.utils.fromWei(bnanaBalance, "ether"));
        } else {
            setBalance("none");           
        }
    };

    useEffect(() => {
        if (balance === "none") {
            fetchBalance();
        }
    })

    let buttonElement;
    let hidden;
    if (balance !== "none" && balance !== undefined) {
        hidden = false;
    } else {
        hidden = true;
    }
    buttonElement = 
        <Button outline color="primary" className='me-3' style={{visibility: hidden ? "hidden" : "visible"}}>
            <img src={bnanaLogo} alt={""} className='me-3' style={{width: "30px", height: "auto"}}/>{parseInt(balance)}
        </Button>
    
    return (
        <>
            {buttonElement}
        </>
    )
};

export default BalanceButton;