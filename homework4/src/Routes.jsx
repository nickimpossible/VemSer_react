import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/Auth";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Cep from "./pages/Cep";

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
              <Route path="/cep" element={<Cep />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      }
    </div >
  );
}

export default RoutesPage;
