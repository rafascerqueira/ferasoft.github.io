import { useState } from "react";
import { NavLink } from "react-router-dom";

function Aside() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <aside className="aside">
      <img src="profile-pic.png" alt="profile" />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Projects"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex-justify-center">
        <label htmlFor="switch" className="switch">
          <input
            type="checkbox"
            id="switch"
            defaultChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </aside>
  );
}

export { Aside };
