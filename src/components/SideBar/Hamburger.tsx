import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Hamburger.css";
import { data } from "./data";
// import Icon from "@/app/Icon";
const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={"navbar--container"}>
        <div className={"iconContainer"}>
          <div
            className={`${"itemsContainer"}
          ${isOpen ? "menuOpen" : "menuClose"}`}
          >
            <ul className={"navbarItems"}>
              {data.map((ele, key) => (
                <div key={key} className="sidebar-item-box">
                  <div>{ele.icons}</div>
                  <div>{ele.text}</div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className={"navbar-items"}>
          <div
            onClick={() => setOpen(!isOpen)}
            className={"hamburgerContainer"}
          >
            <RxHamburgerMenu color={"#FFF"} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
