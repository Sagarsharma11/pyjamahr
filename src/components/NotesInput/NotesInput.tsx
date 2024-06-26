import React, { useState } from "react";
import "./NotesInput.css";

import { CiSquareCheck } from "react-icons/ci";
import { BiSolidPaint } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";

import { useDispatch } from "react-redux";
import { addNote } from "../../Utils/Redux/features/counter/counterSlice/counterSlice"; // Correctly import addNote

type Props = {};

const NotesInput = (props: Props) => {
  const [value, setValue] = useState({
    id: "",
    content: "",
    isPinned: false,
  });
  const [image, setImage] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, ["content"]: e.target.value }));
  };

  const handleSubmit = () => {
    if (value.content !== "") {
      const obj: {
        id: string;
        content: string;
        image?: string;
        isPinned: boolean;
      } = value;
      if (image) {
        obj.image = image;
      }
      dispatch(addNote(obj ));
      setValue((prev) => ({ ...prev, ["content"]: "" }));
      setImage(null);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="NotesInput--main">
      <div className="input--container">
        <input
          onChange={handleChange}
          placeholder="Take a note..."
          type="text"
          value={value.content}
          required={true}
        />
        <div onClick={handleSubmit}>
          <CiSquareCheck size={18} color={"#dcdde1"} />
        </div>
        <div>
          <BiSolidPaint size={18} color="#dcdde1" />
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="imageUpload"
            style={{ display: "none" }}
          />
          <label htmlFor="imageUpload">
            <CiImageOn size={18} color="#dcdde1" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotesInput;
