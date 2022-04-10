import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class GameModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.closeModal()
  }

  render() {

    let modalText;
    if (this.props.won) {
      modalText = (
        <>
          Congratulations, you just won {this.props.wonValue} $BNANA! <br/>
          Remember this is a beta version, your balance will appear in 
          your account only as long as your session lasts. <br/>
          Get ready for the real game launch!
        </>
      );
    } else {
      modalText = (
        <>
          Unfortunatelly your monkey is not ready to farm at this station :( <br/>
          Upgrade him to level 2 so that you can earn $BNANA even if you land at this spot. <br/>
          Remember this is a beta version, your balance will appear in 
          your account only as long as your session lasts. <br/>
          Get ready for the real game launch!
        </>
      )
    } 

    return (
        <Modal isOpen={this.props.open} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader style={{background: "#561473", color: "white", borderColor: "#561473"}}  toggle={this.toggle}>Game result</ModalHeader>
          <ModalBody style={{background: "#6C32A6", color: "white"}}>
            {modalText}
          </ModalBody>
          <ModalFooter style={{background: "#561473", color: "white", borderColor: "#561473"}}>
            <Button disabled={this.state.disabledButtonUpgrade} color="primary" onClick={this.toggle}>
              Upgrade
            </Button>{" "}
          </ModalFooter>
        </Modal>
    );
  }
}

export default GameModal;