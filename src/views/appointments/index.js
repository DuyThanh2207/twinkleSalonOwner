import React, { useState } from "react";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
const AppointmentsPage = () => {
  const appointments = [
    {
      title: "Website Re-Design Plan",
      startDate: new Date(2021, 3, 19, 9, 30),
      endDate: new Date(2021, 3, 19, 11, 30),
    },
    {
      title: "Book Flights to San Fran for Sales Trip",
      startDate: new Date(2021, 3, 20, 12, 0),
      endDate: new Date(2021, 3, 20, 13, 0),
    },
  ];
  const [currentDate, setCurrentDate] = useState("2021-04-20");
  const currentDateChange = (currentDate) => {
    setCurrentDate(currentDate);
  };
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardBody>
              <Scheduler data={appointments}>
                <ViewState
                  currentDate={currentDate}
                  onCurrentDateChange={currentDateChange}
                />
                <WeekView startDayHour={9} endDayHour={19} />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
              </Scheduler>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default AppointmentsPage;
