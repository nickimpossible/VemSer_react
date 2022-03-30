import axios from "axios";
import moment from "moment";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Users() {
  const { jwt } = useContext(AuthContext);
  const [apiUsers, setApiUsers] = useState([]);

  function formataCPF(cpf) {
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");

    //realizar a formatação...
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  async function fetchUsers() {
    try {
      let response = await axios.get("https://my-application-teste.herokuapp.com/pessoa", {
        headers: {
          "Authorization": jwt
        }
      });
      let newUsers = response.data;
      for (let user of newUsers) {
        user.dataNascimento = moment(user.dataNascimento).format("DD/MM/YYYY");
        user.cpf = formataCPF(user.cpf);
      }
      setApiUsers(newUsers);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Header/>
      <div>
        <h1>Usuarios</h1>
        <div>
          {
            apiUsers.map(user => (
              <div key={user.idPessoa}>
                <strong>{user.nome}</strong>
                <p>{user.cpf}</p>
                <p>{user.email}</p>
                <p>{user.dataNascimento}</p>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Users;