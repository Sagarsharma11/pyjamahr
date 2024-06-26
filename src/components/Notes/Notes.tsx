import { useState } from "react";
import "./Notes.css";
import { FaCheckCircle } from "react-icons/fa";
import { TbPinnedFilled } from "react-icons/tb";
import { PiBellSimpleZ } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { MdPhoto } from "react-icons/md";
import { ImFolderDownload } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";

type Props = {
  id: string;
  content: string;
  image?: string;
  isPinned: boolean;
};

const Notes = ({ data }: any) => {
  const [display, setDisplay] = useState(false);
  const color = "#D3D3D3";
  const handleMouseEnter = () => {
    setDisplay(true);
  };
  const handleMouseLeave = () => {
    setDisplay(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="Notes--container"
    >
      <div className={`tick--icon ${display ? "show" : ""}`}>
        <FaCheckCircle size={18} color="#fff" />
      </div>
      <div className={`pin--icon ${display ? "show" : ""}`}>
        <TbPinnedFilled size={24} color={color} />
      </div>
      {data.image ? (
        <div className="image-preview">
          <img src={data?.image} alt="Selected" />
        </div>
      ) : (
        ""
      )}
      {data.content}
      <div className={`down-dash ${display ? "show" : ""}`}>
        <div>
          <PiBellSimpleZ size={22} color={color} />
        </div>
        <div>
          <IoMdPersonAdd size={22} color={color} />
        </div>
        <div>
          <IoColorPalette size={22} color={color} />
        </div>
        <div>
          <MdPhoto size={22} color={color} />
        </div>
        <div>
          <ImFolderDownload size={22} color={color} />
        </div>
        <div>
          <BsThreeDotsVertical size={22} color={color} />
        </div>
      </div>
    </div>
  );
};

export default Notes;
