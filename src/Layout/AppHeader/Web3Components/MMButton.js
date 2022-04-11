import React, { useEffect, useState } from "react";

import { Button } from 'reactstrap';

import { connectWallet } from "../../../ethereum/web3";

import metaMaskLogo from "../../../assets/metaMask/MetaMask.png";

const MMButton = (props) => {
    
    const [account, setAccount] = useState("none");

    const fetchAccount = async () => {
        if (window.isUserWallet) {
            const walletHash = await window.web3Instance.eth.getAccounts();
            setAccount(walletHash[0]);
            props.rerenderParentCallback();
        } else {
            setAccount("none");           
        }
    };

    const connectWalletExtended = () => {
        connectWallet().then(
            () => {
                fetchAccount();
            }
        );
    }

    useEffect(() => {
        fetchAccount();
    })

    let buttonElement;
    if (account !== "none" && account !== undefined) {
        buttonElement = <Button outline color="primary"><img src={metaMaskLogo} alt={""} className='me-3' style={{width: "30px", height: "auto"}}/>{account.slice(0,5) + "..." + account.slice(account.length - 5)}</Button>
    } else {
        buttonElement = <Button outline color="primary" onClick={() => connectWalletExtended()}><img src={metaMaskLogo} alt={""} className='me-3' style={{width: "30px", height: "auto"}}/>Connect MetaMask</Button>
    }
    
    return (
        <>
            {buttonElement}
        </>
    )
};

export default MMButton;