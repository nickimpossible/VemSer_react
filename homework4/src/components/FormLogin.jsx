import { useContext } from "react";
import { AuthContext } from "../context/Auth"

function FormLogin() {
  const {
    user, setUser,
    password, setPassword,
    handleLogin,
    loginError
  } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Usuario" onChange={e => setUser(e.target.value)} value={user} />
        <input type="text" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password} />
        <input type="submit" value="Logar" onClick={handleLogin} />
      </form>
      {
        loginError && <span className="Erro">Erro no Login</span>
      }
    </>
  );
}

export default FormLogin;