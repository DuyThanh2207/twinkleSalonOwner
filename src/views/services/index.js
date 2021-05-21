import React, { useState } from "react";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
  CCardFooter,
  CSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ModalAddStaff from "./components/ModalAddStaff";
import ModalEditStaff from "./components/ModalEditStaff";
const usersData = [
  {
    name: "Farah Minard",
    username: "fminard0",
    email: "fminard0@blogspot.com",
    phone_number: "734-369-4990",
    services: "Haircut",
  },
  {
    name: "Eudora Lepoidevin",
    username: "elepoidevin1",
    email: "elepoidevin1@yelp.com",
    phone_number: "174-410-0422",
    services: "Blow Hair",
  },
  {
    name: "Alexia Breit",
    username: "abreit2",
    email: "abreit2@ameblo.jp",
    phone_number: "294-898-2417",
    services: "Haircut",
  },
  {
    name: "Sallie MacHarg",
    username: "smacharg3",
    email: "smacharg3@free.fr",
    phone_number: "881-188-2398",
    services: "Haircut",
  },
  {
    name: "Georg Kelsell",
    username: "gkelsell4",
    email: "gkelsell4@youku.com",
    phone_number: "876-165-9029",
    services: "Haircut",
  },
];
const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = [
  "Name",
  "Duration",
  "Price",
  {
    key: "edit",
    label: "",
    sorter: false,
    filter: false,
  },
];
const Posts = () => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            <div className="d-flex justify-content-end">
              <div
                className="btn"
                style={{
                  background:
                    "linear-gradient(45deg, #9f6ccc 0%, #cc6cbc 10%, #f98358 40%,#f8bc4e)",
                }}
                onClick={() => setModalAdd(!modalAdd)}
              >
                Add New Services
              </div>
            </div>
            <ModalAddStaff
              modal={modalAdd}
              setModal={() => setModalAdd(!modalAdd)}
            />
            <ModalEditStaff
              modal={modalEdit}
              setModal={() => setModalEdit(!modalEdit)}
            />
            <CDataTable
              columnFilter
              tableFilter
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                edit: (item, index) => {
                  return (
                    <td className="py-2" style={{ textAlign: "center" }}>
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          setModalEdit(!modalEdit);
                        }}
                      >
                        <CIcon name={"cilPencil"} className="mr-1" />
                        View
                      </CButton>
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        className="ml-2"
                        // onClick={() => {
                        //   toggleDetails(index);
                        // }}
                      >
                        <CIcon name={"cilTrash"} className="mr-1" />
                        Delete
                      </CButton>
                    </td>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Posts;
