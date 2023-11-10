import { Mail, Home } from "react-feather";

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  {
    id: "secondPage",
    title: "User Chats",
    icon: <Mail size={20} />,
    navLink: "/apps/chats",
  },
  {
    id: "administration",
    title: "Administration",
    icon: <Mail size={20} />,
    navLink: "/apps/administration",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <Mail size={20} />,
    navLink: "/apps/analytics",
  },
];
