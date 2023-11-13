import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="aside">
      <img className="profile-pic" src="profile-pic.jpg" width={180} height={180} alt="profile" />
      <h1 className="main-title">Rafael Cerqueira</h1>
      <h2 className="subtitles">Software Developer</h2>
      <div className="located">
        <span className="pin-icon"></span>
        <span className="address">Rio de Janeiro - Brazil</span>
      </div>
      <nav>
        <ul className="aside-menu">
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
              to="/service"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              Service
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: "#000",
                textDecoration: "none",
                opacity: isActive ? 1 : 0.7,
                textShadow: isActive ? "1px 1px 2px" : "",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export { Aside };
