import React, { useEffect, useState } from "react";
import { Button } from 'reactstrap';

import lockedBnanaLogo from "../../../assets/metaMask/bnanaCage.png";

const LockedBalanceButton = (props) => {
    
    const [balance, setBalance] = useState("none");

    const fetchBalance = async () => {
        if (window.isUserWallet) {
            const walletHash = await window.web3Instance.eth.getAccounts();
            const LockedBalance = await window.gameContractOld.methods.userBalance(walletHash[0]).call();
            setBalance(window.web3Instance.utils.fromWei(LockedBalance, "ether"));
            
        } else {
            setBalance("none");
        }
    };

    useEffect(() => {
        setTimeout(
            fetchBalance, 1500
        )
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
            <img src={lockedBnanaLogo} alt={""} className='me-3' style={{width: "30px", height: "auto"}}/>{balance}
        </Button>
    
    return (
        <>
            {buttonElement}
        </>
    )
};

export default LockedBalanceButton