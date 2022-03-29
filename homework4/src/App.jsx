import Main from "./pages/Main"
import AuthProvider from "./context/Auth"

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
