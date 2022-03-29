import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [jwt, setJwt] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      let response = await axios.post("https://my-application-teste.herokuapp.com/auth", {
        usuario: user,
        senha: password,
      });
      let newJwt = response.data.split(" ")[1];

      setJwt(newJwt);
      setLoginError(false);
    } catch (error) {
      setLoginError(true);
    }
  }

  function handleLogout() {
    setJwt("");
  }

  return (
    <AuthContext.Provider value={{
      jwt, setJwt,
      user, setUser,
      password, setPassword,
      handleLogin, handleLogout,
      loginError, setLoginError
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;