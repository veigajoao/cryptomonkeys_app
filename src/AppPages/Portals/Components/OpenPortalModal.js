import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from "reactstrap";

//import all videos + mapping function
import commonCaveMonkey from "../../../assets/portalVideos/common/CaveMonkey.mp4";
import commonGatherer from "../../../assets/portalVideos/common/Gatherer.mp4";
import commonHunter from "../../../assets/portalVideos/common/Hunter.mp4";
import commonFireBender from "../../../assets/portalVideos/common/FireBender.mp4";
import commonFarmer from "../../../assets/portalVideos/common/Farmer.mp4";
import commonGuardian from "../../../assets/portalVideos/common/Guardian.mp4";
import commonKing from "../../../assets/portalVideos/common/King.mp4";
import commonIntern from "../../../assets/portalVideos/common/Intern.mp4";
import commonCryptoInvestor from "../../../assets/portalVideos/common/CryptoInvestor.mp4";
import commonMetaMonkey from "../../../assets/portalVideos/common/MetaMonkey.mp4";
import commonCyborg from "../../../assets/portalVideos/common/Cyborg.mp4";

import goldenCaveMonkey from "../../../assets/portalVideos/golden/CaveMonkey.mp4";
import goldenGatherer from "../../../assets/portalVideos/golden/Gatherer.mp4";
import goldenHunter from "../../../assets/portalVideos/golden/Hunter.mp4";
import goldenFireBender from "../../../assets/portalVideos/golden/FireBender.mp4";
import goldenFarmer from "../../../assets/portalVideos/golden/Farmer.mp4";
import goldenGuardian from "../../../assets/portalVideos/golden/Guardian.mp4";
import goldenKing from "../../../assets/portalVideos/golden/King.mp4";
import goldenIntern from "../../../assets/portalVideos/golden/Intern.mp4";
import goldenCryptoInvestor from "../../../assets/portalVideos/golden/CryptoInvestor.mp4";
import goldenMetaMonkey from "../../../assets/portalVideos/golden/MetaMonkey.mp4";
import goldenCyborg from "../../../assets/portalVideos/golden/Cyborg.mp4";

import mysticalFarmer from "../../../assets/portalVideos/mystical/Farmer.mp4";
import mysticalGuardian from "../../../assets/portalVideos/mystical/Guardian.mp4";
import mysticalKing from "../../../assets/portalVideos/mystical/King.mp4";
import mysticalIntern from "../../../assets/portalVideos/mystical/Intern.mp4";
import mysticalCryptoInvestor from "../../../assets/portalVideos/mystical/CryptoInvestor.mp4";
import mysticalMetaMonkey from "../../../assets/portalVideos/mystical/MetaMonkey.mp4";
import mysticalCyborg from "../../../assets/portalVideos/mystical/Cyborg.mp4";

const getMonkeyVideo = (monkeyType, portalType) => {
  let videoMapping = {
    "1": {
      "1": commonCaveMonkey,
      "2": commonGatherer,
      "3": commonHunter,
      "4": commonFireBender,
      "5": commonFarmer,
      "6": commonGuardian,
      "7": commonKing,
      "8": commonIntern,
      "9": commonCryptoInvestor,
      "10": commonMetaMonkey,
      "11": commonCyborg
    },
    "2": {
      "1": goldenCaveMonkey,
      "2": goldenGatherer,
      "3": goldenHunter,
      "4": goldenFireBender,
      "5": goldenFarmer,
      "6": goldenGuardian,
      "7": goldenKing,
      "8": goldenIntern,
      "9": goldenCryptoInvestor,
      "10": goldenMetaMonkey,
      "11": goldenCyborg
    },
    "3": {
      "5": mysticalFarmer,
      "6": mysticalGuardian,
      "7": mysticalKing,
      "8": mysticalIntern,
      "9": mysticalCryptoInvestor,
      "10": mysticalMetaMonkey,
      "11": mysticalCyborg
    }
  };
  return videoMapping[portalType][monkeyType];
};

class OpenPortalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: true,
    };

    this.toggle = this.toggle.bind(this);
    this.changeBackdrop = this.changeBackdrop.bind(this);
  }

  componentDidMount() {
    if (this.props.NFTProcessPhase === 1) {
      this.setState({disabledButtonCancel: true, disabledButtonUpgrade: true});
    } else if (this.props.NFTProcessPhase === 2) {
      this.setState({disabledButtonCancel: false, disabledButtonUpgrade: true});
    } else if (this.props.NFTProcessPhase === 3) {
      this.setState({disabledButtonCancel: false, disabledButtonUpgrade: true});
    }
  }

  toggle() {
    this.props.closeModal()
  }

  changeBackdrop(e) {
    let value = e.target.value;
    if (value !== "static") {
      value = JSON.parse(value);
    }
    this.setState({ backdrop: value });
  }

  render() {

    let modalText;
    if (this.props.NFTProcessPhase === 0) {
      modalText = (
        <>
          Are you sure you want to upgrade your NFT of type {this.props.monkeyType} to level 2?
          Upgrade cost is {"X"} $BNANA.
        </>
      );
    } else if (this.props.NFTProcessPhase === 1) {
      modalText = (
        <>
          <Spinner type="spinner-border" color="warning" />
          Please wait while the blockchain processes your transaction...
        </>
      )
    } else if (this.props.NFTProcessPhase === 2) {
      modalText = (
        <>
          Congratulations! Your NFT was upgraded to level 2!
        </>
      )
    } else if (this.props.NFTProcessPhase === 3) {
      modalText = (
        <>
          Looks like something went wrong... Some usual causes are: <br/><br/>
          1. You didn't approve the transaction on MetaMask <br/><br/>
          2. You don't have enough BNANA in your wallet for the transaction <br/><br/>
          3. Your internet connection is unstable <br/><br/>
          If you cannot use this functionality, please contact our team on telegram or 
          discord for assistance!
        </>
      )
    }

    return (
        <Modal isOpen={this.props.open} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader style={{background: "#561473", color: "white", borderColor: "#561473"}}  toggle={this.toggle}>Char Upgrade</ModalHeader>
          <ModalBody style={{background: "#6C32A6", color: "white"}}>
            {modalText}
          </ModalBody>
          <ModalFooter style={{background: "#561473", color: "white", borderColor: "#561473"}}>
            <Button disabled={this.state.disabledButtonCancel} color="link" onClick={this.toggle}>
              Cancel
            </Button>
            <Button disabled={this.state.disabledButtonUpgrade} color="primary" onClick={() => this.props.upgradeNftAccept()}>
              Upgrade
            </Button>{" "}
          </ModalFooter>
        </Modal>

    );
  }
}

export default OpenPortalModal;