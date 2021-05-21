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
  "salon",
  {
    key: "edit",
    label: "",
    sorter: false,
    filter: false,
  },
];
const AccountsSalonStaff = () => {
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>CRUD Partner</CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CRow>
                  <CCol sm="6">
                    <CFormGroup>
                      <CLabel htmlFor="name">Name</CLabel>
                      <CInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter Staff's Name..."
                      />
                      <CFormText className="help-block">
                        Please enter Staff's name
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="6">
                    <CFormGroup>
                      <CLabel htmlFor="password">Password</CLabel>
                      <CInput
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter Staff's Password..."
                      />
                      <CFormText className="help-block">
                        Please enter Staff's password
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="6">
                    <CFormGroup>
                      <CLabel htmlFor="user_name">Username</CLabel>
                      <CInput
                        type="text"
                        id="user_name"
                        name="user_name"
                        placeholder="Enter Staff's Username..."
                      />
                      <CFormText className="help-block">
                        Please choose Staff's username
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="6">
                    <CFormGroup>
                      <CLabel htmlFor="user_name">Belong to Salon ...</CLabel>
                      <CSelect custom name="ccmonth" id="ccmonth">
                        <option>...</option>
                      </CSelect>
                      <CFormText className="help-block">
                        Please choose Staff's salon
                      </CFormText>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> Submit
              </CButton>
              <CButton type="reset" size="sm" color="danger" className="ml-3">
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="mt-3">
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

export default AccountsSalonStaff;
