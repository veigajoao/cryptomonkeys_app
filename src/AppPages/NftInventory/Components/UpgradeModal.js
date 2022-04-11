import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from "reactstrap";

import { upgradeCost } from "../../../ethereum/web3";

class UpgradeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: true,
      disabledButtonCancel: false,
      disabledButtonUpgrade: false,
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
          Upgrade cost is {upgradeCost} $BNANA.
        </>
      );
    } else if (this.props.NFTProcessPhase === 1) {
      modalText = (
        <>
          <Spinner type="grow" color="warning" />
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

export default UpgradeModal;