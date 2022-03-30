import { useContext } from "react";
import { AuthContext } from "../context/Auth"

function LogoutButton() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <input type="submit" value="Deslogar" onClick={handleLogout} />
  );
}

export default LogoutButton;