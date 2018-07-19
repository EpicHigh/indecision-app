import React from "react";
import { StyledModal, ModalTitle, ModalBody, Button } from "../styles/main";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(50%, 50%)"
  }
};
const ListModal = ({ doOpenModal, decision, doCloseModal }) => (
  <StyledModal
    isOpen={doOpenModal}
    contentLabel={"Computer chose:"}
    onRequestClose={doCloseModal}
    closeTimeoutMS={200}
    style={customStyles}
  >
    <ModalTitle>Your computer has chosen:</ModalTitle>
    <ModalBody>{decision}</ModalBody>
    <Button onClick={doCloseModal}>Close</Button>
  </StyledModal>
);

export default ListModal;
