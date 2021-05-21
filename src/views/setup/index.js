import React, { useState } from "react";
import { CCard, CCardBody, CCol, CRow, CButton } from "@coreui/react";
import { Container, Grid, InputLabel } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles(() => ({
  formControl: {
    width: "100%",
    marginTop: "1rem",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "0.5rem",
  },
  chip: {
    margin: 2,
  },
}));
const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const validationSchema = yup.object({
  name: yup
    .string("Enter your name's salon")
    .required("Name's salon is required"),
  address: yup.string("Enter your address").required("Address is required"),
  openTime: yup
    .string("Enter your open time")
    .required("Open time is required"),
  closeTime: yup
    .string("Enter your close time")
    .required("Close time is required"),
});
const SetupSalon = () => {
  const [workingDay, setWorkingDay] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ]);
  const [enableEdit, setEnableEdit] = useState(false);
  const [dataSalon, setDataSalon] = useState();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      openTime: "",
      closeTime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setEnableEdit(!enableEdit);
    },
  });
  const onGetSetupData = () => {
    console.log(dataSalon);
  };
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardBody>
            <div className="d-flex justify-content-end">
              <CButton
                color="warning"
                size="lg"
                shape="pill"
                className="m-2"
                type="submit"
                onClick={() => setEnableEdit(!enableEdit)}
                style={{ color: "#fff" }}
              >
                Edit
              </CButton>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                type="text"
                value={formik.values.name}
                disabled={enableEdit ? false : true}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                fullWidth
                className="mt-3"
                id="address"
                name="address"
                label="Address"
                type="text"
                value={formik.values.address}
                disabled={enableEdit ? false : true}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
              <FormControl className={classes.formControl}>
                <InputLabel id="working-day">Working Day</InputLabel>
                <Select
                  labelId="working-day"
                  id="working-day-choice"
                  multiple
                  value={workingDay}
                  onChange={(e) => setWorkingDay(e.target.value)}
                  disabled={enableEdit ? false : true}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          className={classes.chip}
                        />
                      ))}
                    </div>
                  )}
                >
                  {weekdays.map((workingDay) => (
                    <MenuItem key={workingDay} value={workingDay}>
                      {workingDay}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                className="mt-3"
                id="openTime"
                name="openTime"
                label="Open Time"
                type="time"
                disabled={enableEdit ? false : true}
                value={formik.values.openTime}
                onChange={formik.handleChange}
                error={
                  formik.touched.openTime && Boolean(formik.errors.openTime)
                }
                helperText={formik.touched.openTime && formik.errors.openTime}
              />
              <TextField
                InputLabelProps={{ shrink: true }}
                fullWidth
                className="mt-3"
                id="closeTime"
                name="closeTime"
                label="Close Time"
                type="time"
                disabled={enableEdit ? false : true}
                value={formik.values.closeTime}
                onChange={formik.handleChange}
                error={
                  formik.touched.closeTime && Boolean(formik.errors.closeTime)
                }
                helperText={formik.touched.closeTime && formik.errors.closeTime}
              />
              {enableEdit && (
                <CButton
                  color="success"
                  size="lg"
                  shape="pill"
                  className="m-2"
                  type="submit"
                  // onClick={() => onGetSetupData()}
                >
                  Save
                </CButton>
              )}
            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default SetupSalon;
