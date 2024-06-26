import React from "react";
import "./SideBar.css";

import { FaRegLightbulb } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {};

const SideBar = (props: Props) => {
  const data = [
    {
      icons: <FaRegLightbulb size={18} color={"#fff"} />,
      text: "Notes",
    },
    {
      icons: <FaRegBell size={18} color={"#fff"} />,
      text: "Remainders",
    },
    {
      icons: <RiPencilLine size={18} color={"#fff"} />,
      text: "Edit Labels",
    },
    {
      icons: <IoArchiveOutline  size={18} color={"#fff"} />,
      text: "Archive",
    },
    {
      icons: <FaRegTrashAlt size={18} color={"#fff"} />,
      text: "Trash",
    },
  ];
  return (
    <div className="sidebar--main--container">
      {data.map((ele, key) => (
        <div key={key} className="sidebar-item-box">
          <div>{ele.icons}</div>
          <div>{ele.text}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
