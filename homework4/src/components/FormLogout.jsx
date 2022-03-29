import { useContext } from "react";
import { AuthContext } from "../context/Auth"

function FormLogout() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <>
      <h1>Logado</h1>
      <input type="submit" value="Deslogar" onClick={handleLogout} />
    </>
  );
}

export default FormLogout;