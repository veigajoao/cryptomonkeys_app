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
    this.vidRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.open && this.props.tokenObject !== "approve") {
      this.vidRef.play();
    }
  }

  toggle() {
    this.props.closeModal()
  }

  render() {

    let content;
    if (this.props.tokenObject === "approve") {
      content = (
        <>
          <Spinner type="grow" color="warning" />
          Please wait while the blockchain processes your transaction...
        </>
      );
    } else {
      content = (
        <video autoPlay muted playsInline width="100%" height="100%" >
            <source src={getMonkeyVideo(this.props.tokenObject.nftData[0], this.props.tokenObject.nftData[4])} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    }

    return (
        <Modal isOpen={this.props.open} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader style={{background: "#561473", color: "white", borderColor: "#561473"}}  toggle={this.toggle}>Portal Opening</ModalHeader>
          <ModalBody style={{background: "#6C32A6", color: "white", margin: "0", padding: "0"}}>
            {content}
          </ModalBody>
          <ModalFooter style={{background: "#561473", color: "white", borderColor: "#561473"}}>
            <Button color="link" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>

    );
  }
}

export default OpenPortalModal;