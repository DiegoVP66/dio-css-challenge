import "./App.css";

import RoutesComponent from "routes";
import { useState } from "react";
import { AuthContext, AuthContextData } from "AuthContextData";

function App() {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });
  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <RoutesComponent />
    </AuthContext.Provider>
  );
}

export default App;
