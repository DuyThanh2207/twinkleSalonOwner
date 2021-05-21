import React from "react";
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
import usersData from "../../users/UsersData";

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
  "name",
  "username",
  // "open_time",
  // { key: "status", _style: { width: "10%" } },
  // "store_type",
  {
    key: "edit",
    label: "",
    sorter: false,
    filter: false,
  },
];

const AccountsAdmin = () => {
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardBody>
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
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
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
                          // onClick={() => {
                          //   toggleDetails(index);
                          // }}
                        >
                          <CIcon name={"cilPencil"} className="mr-1" />
                          Edit
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
                          <CIcon name={"cilXCircle"} className="mr-1" />
                          Block
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
    </>
  );
};

export default AccountsAdmin;
