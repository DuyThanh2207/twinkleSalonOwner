import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import React from "react";

function ModalAddStaff({ modal, setModal }) {
  return (
    <div>
      <CModal show={modal} onClose={setModal}>
        <CModalHeader closeButton>Modal title</CModalHeader>
        <CModalBody>Lorem ipsum dolor...</CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>{" "}
          <CButton color="secondary" onClick={setModal}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
}

export default ModalAddStaff;
