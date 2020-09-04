import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

function Dropdown() {
  const [click, setClick] = useState(false);

  console.log("working");

  const handleClick = () => setClick(!click);

  console.log(click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={false ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
