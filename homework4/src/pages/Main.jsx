import { useContext } from "react";
import { AuthContext } from "../context/Auth"
import FormLogin from "../components/FormLogin"
import FormLogout from "../components/FormLogout"

function Main() {
  const { jwt } = useContext(AuthContext);

  return (
    <div>
      {
        jwt.length === 0
          ? <FormLogin />
          : <FormLogout />
      }
    </div >
  );
}

export default Main;
