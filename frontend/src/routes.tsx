import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Admin from "pages/Admin";
import Auth from "pages/Admin/Auth";
import ProjectCRUDForm from "pages/Admin/CRUDFORM";
import Home from "pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "util/auth";

const RoutesComponent = () => (
  <BrowserRouter>
    <div className="page-container">
      <div className="content-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/auth/" element={<Auth />} />

          {isAuthenticated() ? (
            <Route path="/admin/crud" element={<Admin />} />
          ) : (
            <Route path="/admin/crud" element={<Navigate to="/admin/auth" />} />
          )}
          {isAuthenticated() ? (
            <Route path="/admin/crud/create" element={<ProjectCRUDForm />} />
          ) : (
            <Route
              path="/admin/crud/create"
              element={<Navigate to="/admin/auth" />}
            />
          )}
          {isAuthenticated() ? (
            <Route
              path="/admin/crud/:projectId"
              element={<ProjectCRUDForm />}
            />
          ) : (
            <Route
              path="/admin/crud/:projectId"
              element={<Navigate to="/admin/auth" />}
            />
          )}
        </Routes>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);

export default RoutesComponent;
