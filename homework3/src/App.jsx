import { useContext } from "react";
import UsersProvider from "./context/Users"
import FormUsers from "./components/FormUsers";
import UsersContainer from "./components/UsersContainer"

import "./App.css";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <FormUsers />
        <UsersContainer />
      </UsersProvider>
    </div>
  );
}

export default App;