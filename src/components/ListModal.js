import React from "react";
import Modal from "react-modal";

const ListModal = ({ doOpenModal, decision, doCloseModal }) => (
  <Modal
    isOpen={doOpenModal}
    contentLabel={"Computer chose:"}
    onRequestClose={doCloseModal}
  >
    <h3>A computer has chosen:</h3>
    <p>{decision}</p>
    <button onClick={doCloseModal}>Close</button>
  </Modal>
);

export default ListModal;
