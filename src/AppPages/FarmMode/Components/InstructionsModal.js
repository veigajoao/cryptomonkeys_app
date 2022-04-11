import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class InstructionsModal extends React.Component {
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

    return (
        <Modal isOpen={this.props.open} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop}>
          <ModalHeader style={{background: "#561473", color: "white", borderColor: "#561473"}}  toggle={this.toggle}>Game result</ModalHeader>
          <ModalBody style={{background: "#6C32A6", color: "white"}}>
            Use the time machine to bring your monkey to the closest workstation. <br/>
            Each NFT monkey in your collection is able to work 3 times a day, 
            with an eight hour interval (complying with union regulations). <br/>
            The time machine brings your monkey to a random location, there's a 20% chance that the time machine will bring your monkey to a level 2 workstation.
            If that happens, you'll get 6 times the rewards. But beware, only level 2 monkeys are able to perform these task,
            if your monkey is level 1 and lands at a level 2 workstation, you'll get no rewards...
          </ModalBody>
          <ModalFooter style={{background: "#561473", color: "white", borderColor: "#561473"}}>
            <Button disabled={this.state.disabledButtonUpgrade} color="primary" onClick={this.toggle}>
              Ok
            </Button>{" "}
          </ModalFooter>
        </Modal>
    );
  }
}

export default InstructionsModal;