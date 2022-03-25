import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Repos from "./pages/Repos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/repos" element={<Repos />} />
      </Routes>
    </Router>
  );
}

export default App;