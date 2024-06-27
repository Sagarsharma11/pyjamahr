import React, { useState } from "react";
import "./NotesInput.css";
import { CiSquareCheck } from "react-icons/ci";
import { BiSolidPaint } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addNote } from "../../Utils/Redux/features/counter/counterSlice/notesSlice"; // Correctly import addNote
import { PiBellSimpleZ } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { ImFolderDownload } from "react-icons/im";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import { TfiBackRight } from "react-icons/tfi";
import { TbPinnedFilled } from "react-icons/tb";
import { RiFolderImageFill } from "react-icons/ri";
type Props = {};

type obj = {
  id: string;
  content: string;
  title: string;
  image?: string | undefined;
  isPinned: boolean;
  backgroundColor: string;
};

const NotesInput = (props: Props) => {
  const [value, setValue] = useState<obj>({
    id: "",
    title: "",
    content: "",
    isPinned: false,
    image: "",
    backgroundColor: "",
  });
  const [image, setImage] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (value.content !== "") {
      if (image) {
        setValue((prev) => ({ ...prev, ["image"]: image }));
      }
      dispatch(addNote(value));
      setValue((prev) => ({
        ...prev,
        content: "",
        image: "",
        title: "",
        isPinned: false,
      }));
      setImage(null);
      setShow(!show);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setValue((prev) => ({ ...prev, ["image"]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };
  const color = "#B2BEB5";
  return (
    <div className="NotesInput--main">
      <div className="input--container">
        {show === false ? (
          <div onClick={() => setShow(!show)} className="container-1">
            <div className="take-a-note">Take a note..</div>
            <div onClick={handleSubmit}>
              <CiSquareCheck size={18} color={"#dcdde1"} />
            </div>
            <div>
              <BiSolidPaint size={18} color="#dcdde1" />
            </div>
            <div>
              <CiImageOn size={18} color="#dcdde1" />
            </div>
          </div>
        ) : (
          <div className="container-2">
            <div className="title--container">
              <input
                onChange={handleChange}
                placeholder="Title"
                type="text"
                value={value.title}
                required={true}
                name={"title"}
                className="input-field"
              />
              <div
                onClick={() =>
                  setValue((prev) => ({ ...prev, isPinned: !prev.isPinned }))
                }
              >
                <TbPinnedFilled
                  size={24}
                  color={value.isPinned ? "#fff" : color}
                />
              </div>
            </div>
            <input
              onChange={handleChange}
              placeholder="Take a note..."
              type="text"
              value={value.content}
              required={true}
              name={"content"}
              className="input-field"
            />
            <div className={`Notes-down-dash ${true ? "show" : ""}`}>
              <div className={"notes-left-side"}>
                <div>
                  <PiBellSimpleZ size={18} color={color} />
                </div>
                <div>
                  <IoMdPersonAdd size={18} color={color} />
                </div>
                <div>
                  <input
                    onChange={handleChange}
                    type="color"
                    required={true}
                    name={"backgroundColor"}
                    id={"bgColor"}
                    className="input-action"
                  />
                  <label htmlFor="bgColor">
                    <IoColorPalette size={18} color={color} />
                  </label>
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="imageUpload"
                    style={{ display: "none" }}
                    className="input-action"
                  />
                  <label htmlFor="imageUpload">
                    <RiFolderImageFill
                      size={18}
                      color={image?.length ? "#fff" : color}
                    />
                  </label>
                </div>
                <div>
                  <ImFolderDownload size={18} color={color} />
                </div>
                <div>
                  <BsThreeDotsVertical size={18} color={color} />
                </div>
                <div>
                  <RiArrowGoBackFill size={18} color={color} />
                </div>
                <div>
                  <TfiBackRight size={18} color={color} />
                </div>
              </div>
              <div onClick={handleSubmit} className="notes-right-side">
                close
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotesInput;
