import "./App.css";

import RoutesComponent from "routes";
import { useState } from "react";
import { AuthContext, AuthContextData } from "AuthContextData";
import "react-toastify/dist/ReactToastify.css"; // import first
import { ToastContainer } from "react-toastify";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <RoutesComponent />
      <ToastContainer />
    </AuthContext.Provider>
  );
}

export default App;
