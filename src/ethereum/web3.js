import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

import contractFileWhitelist from './contracts_build/WhiteListedPresale.json';
import contractFileBananacoin from './contracts_build/BananaCoin.json';
import contractFileNft from './contracts_build/CryptoMonkeyChars.json';
import contractFilePresale from './contracts_build/PublicPresale.json';

const abiWhitelist = contractFileWhitelist.abi;
const whitelistAddress = "0x8E0ED58bAf27CA6f8FE61317C7cf53BB37e5b00f";

const abiBusd = contractFileBananacoin.abi;
const busdAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";

const abiPresale = contractFilePresale.abi;
const presaleAddress = "0x0C3fD0A556549D261A9758cc7c6F33f6dde298F7";

const bnanaAddress = "0xf9b27685bfaAF96AaedffD45DA69BF7F5d0ea07D";

const abiNft = contractFileNft.abi;
const nftAddress = "0x700Ab8d2b5Ecc5d5aE2Ae6D634656F63aEF5040B";

const bscId = '0x38';
const bscRpcurls = [
    'https://bsc-dataseed.binance.org/',
    'https://bsc-dataseed1.defibit.io/',
    'https://bsc-dataseed1.ninicoin.io/',
    'https://bsc-dataseed2.defibit.io/',
    'https://bsc-dataseed3.defibit.io/',
    'https://bsc-dataseed4.defibit.io/',
    'https://bsc-dataseed2.ninicoin.io/',
    'https://bsc-dataseed3.ninicoin.io/',
    'https://bsc-dataseed4.ninicoin.io/',
    'https://bsc-dataseed1.binance.org/',
    'https://bsc-dataseed2.binance.org/',
    'https://bsc-dataseed3.binance.org/',
    'https://bsc-dataseed4.binance.org/'
];

const bscBlockExplorer = ['https://bscscan.com/'];

//returns true if change was successfu, false if it wasn't
const switchToBsc = async () => {
    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: bscId }],
        });
        return true;
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        try {
            await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                {
                    chainId: bscId,
                    chainName: 'Binance Smart Chain',
                    rpcUrls: bscRpcurls,
                    nativeCurrency: {
                        name: 'BNB',
                        symbol: 'BNB',
                        decimals: 18,
                    },
                    blockExplorerUrls: bscBlockExplorer,
                },
                ],
            });
            return true;
        } catch (addError) {
            // handle "add" error

            return false;
        }
    }
};

const addToken = async () => {
    return await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: bnanaAddress,
                symbol: 'BNANA',
                decimals: 18,
                image: 'https://game.cryptomonkeys.me/assets/img/whitelist/Case Gold Bananas.png',
            },
        },
    });
}

const checkNetwork = async () => {
    const chainId = await ethereum.request({ method: 'eth_chainId' });
    if (chainId != bscId) {
        return await switchToBsc();
    } else {
        return true;
    }
}

const connectWallet = async () => {

    //check if code is on client or server side
    if (typeof window !== 'undefined') {
        
        provider = await detectEthereumProvider();
        if (provider == null) {
            provider = 'undefined';
        }
    } else {
        provider = 'undefined';
    }

    if (provider !== 'undefined') {
        //if on client environment
        window.web3Instance = new Web3(provider);
        window.networkSuccess = await checkNetwork();
        window.isUserWallet = true;
        window.whitelistContract = new web3.eth.Contract(abiWhitelist, whitelistAddress),
        window.priceTokenContract =  new web3.eth.Contract(abiBusd, busdAddress),
        window.nftContract = new web3.eth.Contract(abiNft, nftAddress),
        window.bnanaContract = new web3.eth.Contract(abiBusd, bnanaAddress),
        window.presaleContract = new web3.eth.Contract(abiPresale, presaleAddress),
        
        await addToken();
    } else {
        //if on server environment
        const providerServer = new Web3.providers.HttpProvider(
            'https://data-seed-prebsc-1-s1.binance.org:8545/'
            );
        window.web3Instance = new Web3(providerServer);
        window.networkSuccess = true;
        window.isUserWallet = false;

    }
}



export {connectWallet, checkNetwork};