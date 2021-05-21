import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Salon Owner"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Appointment",
    to: "/appointments",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Clients",
    to: "/clients",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Staffs",
    to: "/staffs",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Reviews",
    to: "/reviews",
    icon: "cil-speech",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Posts",
    to: "/post",
    icon: "cil-speech",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Services",
    to: "/services",
    icon: "cil-speech",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Setup",
    to: "/setup",
    icon: "cil-user",
  },
];

export default _nav;
