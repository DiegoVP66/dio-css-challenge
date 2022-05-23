import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RoutesComponent = () => (
  <BrowserRouter>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default RoutesComponent;
