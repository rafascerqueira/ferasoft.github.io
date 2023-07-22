import { About } from "@pages/About";
import { Home } from "@pages/Home";
import { Projects } from "@pages/Projects";
import { Route, Routes } from "react-router-dom";

export function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
