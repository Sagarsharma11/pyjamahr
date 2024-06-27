import "./SideBar.css";


import { data } from "./data";

type Props = {};

const SideBar = (props: Props) => {
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
