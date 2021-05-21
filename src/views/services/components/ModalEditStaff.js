import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";
import React from "react";

function ModalEditStaff({ modal, setModal }) {
  return (
    <div>
      <CModal show={modal} onClose={setModal}>
        <CModalHeader closeButton>ModalEditStaff</CModalHeader>
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

export default ModalEditStaff;
