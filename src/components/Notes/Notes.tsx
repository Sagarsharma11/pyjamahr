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
import { UseDispatch, useDispatch } from "react-redux";
import { pinnedNote } from "../../Utils/Redux/features/counter/counterSlice/counterSlice";

type Props = {
  id: string;
  content: string;
  image?: string;
  isPinned: boolean;
};

const Notes = ({ data }: any) => {
  const [display, setDisplay] = useState(false);
  const [pinned, setPinned] = useState(false)
  const dispatch = useDispatch()
  const color = "#B2BEB5";
  const handleMouseEnter = () => {
    setDisplay(true);
  };
  const handleMouseLeave = () => {
    setDisplay(false);
  };

  const pinnedNotes = (ele:any)=>{
    console.log(ele)
    setPinned(!pinned)
    dispatch(pinnedNote(ele.id))
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="Notes--container"
    >
      <div className={`tick--icon ${display ? "show" : ""}`}>
        <FaCheckCircle size={18} color="#fff" />
      </div>
      <div onClick={()=>pinnedNotes(data)} className={`pin--icon ${display ? "show" : ""}`}>
        <TbPinnedFilled size={24} color={data.isPinned?"#fff":color} />
      </div>
      {data.image ? (
        <div className="image-preview">
          <img src={data?.image} alt="Selected" />
        </div>
      ) : (
        ""
      )}
      <h4>{data.title}</h4>
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
