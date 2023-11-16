import { Aside } from "@components/Aside";
import { PageRoutes } from "PageRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="page-layout">
          <Aside />
          <PageRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
