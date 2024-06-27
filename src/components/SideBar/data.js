import { FaRegLightbulb } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";
import { IoArchiveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
export const data = [
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