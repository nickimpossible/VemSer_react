import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/Auth";
import axios from "axios";
import moment from "moment";
import ApiError from "../components/ApiError";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Users() {
  const { jwt } = useContext(AuthContext);
  const [apiUsers, setApiUsers] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(true);

  function formatCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, "");
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function formatDate(date) {
    return moment(date).format("DD/MM/YYYY");
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
        user.cpf = formatCPF(user.cpf);
        user.dataNascimento = formatDate(user.dataNascimento);
      }
      setApiUsers(newUsers);
      setApiError(false);
    } catch (error) {
      setApiError(true);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h1>Usuarios</h1>
        {
          loading ? <Loading /> :
            apiError ? <ApiError /> :
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
        }
      </div>
      <Footer />
    </>
  );
}

export default Users;