import AuthProvider from "./context/Auth";
import RoutesPage from "./Routes";

import './App.css';

function App() {
  return (
    <AuthProvider>
      <RoutesPage/>
    </AuthProvider>
  );
}

export default App;