import "./App.css";
import NotesInput from "./components/NotesInput/NotesInput";
import SideBar from "./components/SideBar/SideBar";
import Notes from "./components/Notes/Notes";

import type { RootState } from "./Utils/Redux/Store";
import { useSelector } from "react-redux";

function App() {
  const notes = useSelector((state: RootState) => state.counter);

  console.log(notes)

  return (
    <div className="main">
      <SideBar />
      <div className="left--side">
        <NotesInput />
        <div className="Notes--main--container">
          {
          notes.notes.length ? notes.notes
          .map((ele, key) => (
            <div key={key}>
              <Notes data={ele} />
            </div>
          ))
          :""
          }
        </div>
      </div>
    </div>
  );
}

export default App;
