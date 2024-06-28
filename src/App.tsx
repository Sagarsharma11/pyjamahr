import { useState, useEffect } from "react";
import "./App.css";
import NotesInput from "./components/NotesInput/NotesInput";
import SideBar from "./components/SideBar/SideBar";
import Notes from "./components/Notes/Notes";
import type { RootState } from "./Utils/Redux/Store";
import { useSelector } from "react-redux";
import Hamburger from "./components/SideBar/Hamburger";

function App() {
  const notes = useSelector((state: RootState) => state.notes);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // setIsMobile(window.innerWidth < 481);
      setIsMobile(window.innerWidth / window.devicePixelRatio <= 481);
    };
    console.log("window width ", window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="main">
      {isMobile ? <Hamburger /> : <SideBar />}
      <div className="left--side">
        <NotesInput />
        <div className="Notes--main--container">
          <div className="pinned--container">
            {notes.notes
              .filter(({ isPinned }) => isPinned)
              .map((note, index) => (
                <div key={index}>
                  <Notes data={note} />
                </div>
              ))}
          </div>
          <div className="unpinned--container">
            {notes.notes
              .filter(({ isPinned }) => !isPinned)
              .map((note, index) => (
                <div key={index}>
                  <Notes data={note} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
