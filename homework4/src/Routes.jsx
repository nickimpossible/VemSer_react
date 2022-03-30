import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/Auth"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Users from "./pages/Users"

function RoutesPage() {
  const { jwt } = useContext(AuthContext);

  return (
    <div>
      {
        jwt.length === 0 ? <Login /> :
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </BrowserRouter>
      }
    </div >
  );
}

export default RoutesPage;
