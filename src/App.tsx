import { Aside } from "@components/Aside";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { PageRoutes } from "PageRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
          <div className="flex-row">
            <BrowserRouter>
              <div className="flex-column flex-grow">
                <Header />
                <PageRoutes />
                <Footer />
              </div>
              <div className="flex-column">
                <Aside />
              </div>
            </BrowserRouter>
          </div>
    </>
  );
}

export default App;
