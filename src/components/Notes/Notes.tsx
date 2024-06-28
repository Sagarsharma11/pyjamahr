import { useState } from "react";
import "./Notes.css";
import { FaCheckCircle } from "react-icons/fa";
import { TbPinnedFilled } from "react-icons/tb";
import { PiBellSimpleZ } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { RiFolderImageFill } from "react-icons/ri";
import {
  deleteNote,
  pinnedNote,
  updateColor,
  updateImage,
} from "../../Utils/Redux/features/counter/counterSlice/notesSlice";
import { MdDelete } from "react-icons/md";

// type Props = {
//   id: string;
//   content: string;
//   image?: string;
//   isPinned: boolean;
//   backgroundColor: string;
// };

const Notes = ({ data }: any) => {
  const [display, setDisplay] = useState(true);
  const [pinned, setPinned] = useState(false);
  const dispatch = useDispatch();
  const color = "#B2BEB5";
  const handleMouseEnter = () => {
    // setDisplay(true);
  };
  const handleMouseLeave = () => {
    // setDisplay(false);
  };

  const pinnedNotes = (ele: any) => {
    setPinned(!pinned);
    dispatch(pinnedNote(ele.id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    console.log(e.target.name);
    console.log('id ', id)
    if (e.target.name === "backgroundColor") {
      dispatch(updateColor({ id, color: e.target.value }));
    } else if (e.target.name === "imageUpload") {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          let image = reader.result as string;
          dispatch(updateImage({ id, image }));
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="Notes--container"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <div className={`tick--icon ${display ? "show" : ""}`}>
        <FaCheckCircle size={18} color="#fff" />
      </div>
      <div
        onClick={() => pinnedNotes(data)}
        className={`pin--icon ${display ? "show" : ""}`}
      >
        <TbPinnedFilled size={24} color={data.isPinned ? "#fff" : color} />
      </div>
      {data.image ? (
        <div className="image-preview">
          <img src={data?.image} alt="Selected" />
        </div>
      ) : (
        ""
      )}
      {/* <small>{data.id}</small> */}
      <h4>{data.title}</h4>
  <p>    {data.content}</p>
      <div className={`down-dash ${display ? "show" : ""}`}>
        <div>
          <PiBellSimpleZ size={22} color={color} />
        </div>
        <div>
          <IoMdPersonAdd size={22} color={color} />
        </div>
        <div className="icon-container">
          <input
            onChange={(e) => handleChange(e, data.id)}
            type="color"
            required={true}
            name={"backgroundColor"}
            className="input-action"
            id={`bgColor-${data.id}`}
          />
          <label htmlFor={`bgColor-${data.id}`}>
            <IoColorPalette size={18} color={color} />
          </label>
        </div>
        <div className="icon-container">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleChange(e, data.id)}
            id={`imageUpload-${data.id}`}
            name={"imageUpload"}
            className="input-action"
          />
          <label htmlFor={`imageUpload-${data.id}`}>
            <RiFolderImageFill size={18} color={color} />
          </label>
        </div>
        <div onClick={() => dispatch(deleteNote(data.id))}>
          <MdDelete size={22} color={color} />
        </div>
        <div>
          <BsThreeDotsVertical size={22} color={color} />
        </div>
      </div>
    </div>
  );
};

export default Notes;
