import { Mail, Home } from "react-feather";
import DashboardIcon from "../../assets/images/icons/category.svg";
import ChatIcon from "../../assets/images/icons/Buy.svg";
import StarIcon from "../../assets/images/icons/Star2.svg";
import LogoutIcon from "../../assets/images/icons/Logout.svg";

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <img src={DashboardIcon} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "User Chats",
    icon: <img src={ChatIcon} color="purple" />,
    navLink: "/apps/chats",
  },
  {
    id: "administration",
    title: "Administration",
    icon: <img src={StarIcon} />,
    navLink: "/apps/administration",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <img src={StarIcon} />,
    navLink: "/apps/analytics",
  },
  // {
  //   id: "logout",
  //   title: "Logout",
  //   icon: <img src={LogoutIcon} />,
  //   navLink: "/",
  // },
];
