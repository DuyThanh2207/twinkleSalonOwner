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
  CCollapse,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
const usersData = [
  {
    name: "Nady Thies",
    arrival_time: "2020-10-28 00:36:08",
    invoice: "$5.81",
  },
  {
    name: "Jo ann Bifield",
    arrival_time: "2021-02-21 18:29:07",
    invoice: "$8.76",
  },
  {
    name: "Merline Juan",
    arrival_time: "2021-02-28 00:35:31",
    invoice: "$1.11",
  },
  {
    name: "Madeline Myhan",
    arrival_time: "2020-08-31 00:16:24",
    invoice: "$7.74",
  },
  {
    name: "Elora Bauchop",
    arrival_time: "2021-03-31 12:01:04",
    invoice: "$3.33",
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
  "name",
  "arrival_time",
  "invoice",
  {
    key: "show_services",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];

const Clients = () => {
  const [services, setService] = useState([]);
  const toggleServices = (index) => {
    const position = services.indexOf(index);
    let newServices = services.slice();
    if (position !== -1) {
      newServices.splice(position, 1);
    } else {
      newServices = [...services, index];
    }
    setService(newServices);
  };
  return (
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
              sorter
              scopedSlots={{
                show_services: (item, index) => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleServices(index);
                        }}
                      >
                        {services.includes(index) ? "Hide" : "Show"}
                      </CButton>
                    </td>
                  );
                },
                details: (item, index) => {
                  return (
                    <CCollapse show={services.includes(index)}>
                      <CCardBody>
                        <h4>Hiiii</h4>
                        <p className="text-muted">User since: Helloooo</p>
                        <CButton size="sm" color="info">
                          User Settings
                        </CButton>
                        <CButton size="sm" color="danger" className="ml-1">
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCollapse>
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

export default Clients;
