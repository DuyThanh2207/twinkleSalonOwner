import React, { useEffect, useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as Type from "../../reusable/Constant";

import StaffForm from "./components/StaffForm";
import moment from "moment";

const axios = require("axios");

const fields = [
  {
    key: "avatar",
    label: "Avatar",
  },
  "name",
  "username",
  "email",
  "salary",
  {
    key: "edit",
    label: "",
    sorter: false,
    filter: false,
  },
];
const AccountsSalonStaff = () => {
  const [modal, setModal] = useState(false);
  const [createStatus, setCreateStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [staffList, setStaffList] = useState([]);
  const [avatar, setAvatar] = useState({
    formFile: "",
    VirtualPath: "",
  });
  const [staff, setStaff] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    salary: 0,
    startWorkingDate: "",
  });
  const getAllStaff = () => {
    axios({
      method: "get",
      url: `${Type.Url}/store/allStaffs`,
      headers: {
        Authorization: `Bearer ${Type.token}`,
      },
    }).then((res) => {
      if (res && res.status === 200) {
        setStaffList(res.data.staffs);
      }
    });
  };

  const createStaff = async () => {
    if (
      staff.name !== "" ||
      staff.username !== "" ||
      staff.email !== "" ||
      staff.address !== "" ||
      staff.salary !== 0 ||
      staff.startWorkingDate !== ""
    ) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", staff.name);
      formData.append("username", staff.username);
      formData.append("email", staff.email);
      if (avatar.formFile !== "") formData.append("avatar", avatar.formFile);
      formData.append("address", staff.address);
      formData.append("salary", staff.salary);
      formData.append("startWorkingDate", staff.startWorkingDate);
      await axios({
        method: "post",
        url: `${Type.Url}/store/createStaff`,
        data: formData,
        headers: {
          Authorization: `Bearer ${Type.token}`,
        },
      }).then((res) => {
        if (res && res.status === 200) {
          getAllStaff();
          setModal(false);
          setCreateStatus(true);
          setStaff({
            name: "",
            username: "",
            email: "",
            address: "",
            salary: 0,
            startWorkingDate: "",
          });
          setAvatar({
            formFile: "",
            VirtualPath: "",
          });
        }
      });
    }
  };
  const updateStaff = async () => {
    if (
      staff.name !== "" ||
      staff.username !== "" ||
      staff.email !== "" ||
      staff.address !== "" ||
      staff.salary !== 0 ||
      staff.startWorkingDate !== ""
    ) {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", staff.name);
      formData.append("username", staff.username);
      formData.append("email", staff.email);
      if (avatar.formFile !== "") formData.append("avatar", avatar.formFile);
      formData.append("address", staff.address);
      formData.append("salary", staff.salary);
      formData.append("startWorkingDate", staff.startWorkingDate);
      await axios({
        method: "patch",
        url: `${Type.Url}/store/editStaff?id=${staff._id}`,
        data: formData,
        headers: {
          Authorization: `Bearer ${Type.token}`,
        },
      }).then((res) => {
        if (res && res.status === 200) {
          getAllStaff();
          setModal(false);
          setCreateStatus(true);
          setStaff({
            name: "",
            username: "",
            email: "",
            address: "",
            salary: 0,
            startWorkingDate: "",
          });
          setAvatar({
            formFile: "",
            VirtualPath: "",
          });
        }
      });
    }
  };
  const deleteStaff = async (Id) => {
    setModal(true);
    await axios({
      method: "delete",
      url: `${Type.Url}/store/deleteStaff`,
      data: { id: Id },
      headers: {
        Authorization: `Bearer ${Type.token}`,
      },
    }).then((res) => {
      if (res && res.status === 200) {
        getAllStaff();
        setModal(false);
      }
    });
  };
  const handleInput = (e) => {
    e.persist();
    setStaff({
      ...staff,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  useEffect(() => {
    getAllStaff();
  }, []);
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody className="table__staff">
            <div className="d-flex justify-content-end">
              <div
                className="btn"
                style={{
                  background:
                    "linear-gradient(45deg, #9f6ccc 0%, #cc6cbc 10%, #f98358 40%,#f8bc4e)",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  setModal(!modal);
                  setLoading(false);
                  setCreateStatus(true);
                  setStaff({
                    name: "",
                    username: "",
                    email: "",
                    address: "",
                    salary: 0,
                    startWorkingDate: "",
                  });
                  setAvatar({
                    formFile: "",
                    VirtualPath: "",
                  });
                }}
              >
                Add New Staff
              </div>
            </div>
            <StaffForm
              staff={staff}
              modal={modal}
              handleInput={(e) => handleInput(e)}
              setModal={() => setModal(!modal)}
              avatar={avatar}
              setAvatar={setAvatar}
              createStatus={createStatus}
              createStaff={() => createStaff()}
              updateStaff={() => updateStaff()}
              loading={loading}
              onCancel={() => {
                setStaff({
                  name: "",
                  username: "",
                  email: "",
                  address: "",
                  salary: 0,
                  startWorkingDate: "",
                });
                setAvatar({
                  formFile: "",
                  VirtualPath: "",
                });
              }}
            />
            <CDataTable
              columnFilter
              tableFilter
              items={staffList}
              fields={fields}
              itemsPerPage={5}
              pagination
              scopedSlots={{
                avatar: (item, index) => {
                  if (item.thumbnail !== "")
                    return (
                      <td className="table__img">
                        <img
                          alt=""
                          src={Type.Url + item.avatar}
                          style={{
                            padding: "1.5rem",
                            width: "10rem",
                            height: "10rem",
                          }}
                        ></img>
                      </td>
                    );
                  else
                    return (
                      <td className="table__img">
                        <img
                          alt=""
                          src="https://via.placeholder.com/150"
                          style={{
                            padding: " 1.5rem",
                            width: "10rem",
                            height: "10rem",
                          }}
                        ></img>
                      </td>
                    );
                },
                edit: (item, index) => {
                  return (
                    <td>
                      <div style={{ textAlign: "center" }}>
                        <CButton
                          color="primary"
                          variant="outline"
                          shape="square"
                          size="sm"
                          onClick={() => {
                            setModal(!modal);
                            setCreateStatus(false);
                            setLoading(false);
                            setStaff({
                              ...staff,
                              ...item,
                              startWorkingDate: moment(
                                item.startWorkingDate
                              ).format("YYYY-MM-DD"),
                            });
                            setAvatar({
                              ...avatar,
                              VirtualPath: item.avatar,
                            });
                          }}
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
                          onClick={() => {
                            deleteStaff(item._id);
                          }}
                        >
                          <CIcon name={"cilTrash"} className="mr-1" />
                          Delete
                        </CButton>
                      </div>
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

export default AccountsSalonStaff;
