import { NavLink } from "react-router-dom";
import { menupage } from "@utils/aside_menu";
import { useState } from "react";

function Aside() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <aside className="aside">
      <img
        className="profile-pic"
        src="profile-pic.webp"
        width={180}
        height={180}
        alt="profile"
      />
      <h1 className="main-title">Rafael Cerqueira</h1>
      <h2 className="subtitles">Software Developer</h2>
      <div className="located">
        <span className="pin-icon"></span>
        <span className="address">Rio de Janeiro - Brazil</span>
      </div>
      <nav>
        <ul className="aside-menu">
          {menupage.map((menu, indx) => (
            <li key={indx.toString()}>
              <NavLink
                to={menu.route}
                style={({ isActive }) => ({
                  color: "#000",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.7,
                  textShadow: isActive ? "1px 1px 2px" : "",
                })}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={isOpenMenu ? `mobile-menu show-menu` : `mobile-menu`}>
          <div className="menu-close" onClick={handleMenu}></div>
          {menupage.map((menu, indx) => (
            <li key={indx}>
              <NavLink
                to={menu.route}
                style={({ isActive }) => ({
                  color: "#ebd5d5",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.7,
                  textShadow: isActive ? "1px 1px 2px" : "",
                  // display: isActive ? "inline-block" : "none",
                })}
              >
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div
          className={isOpenMenu ? `` : `menu-open`}
          onClick={handleMenu}
        ></div>
      </nav>
    </aside>
  );
}

export { Aside };
