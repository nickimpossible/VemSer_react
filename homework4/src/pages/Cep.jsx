import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ApiError from "../components/ApiError";
import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Users() {
  const [cep, setCep] = useState("");
  const [cepResult, setCepResult] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConsult(e) {
    e.preventDefault();
    setLoading(true);
    try {
      let response = await await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      let newCep = response.data;

      if(newCep.erro === true) {
        throw new Error("Cep invalido");
      }

      setCepResult(newCep);
      setApiError(false);
    } catch (error) {
      setApiError(true);
    }
    setLoading(false)
  }

  return (
    <>
      <Header />
      <div>
        <h1>Consulta CEP</h1>
        <form>
          <label>CEP: </label>
          <input type="text" placeholder="Usuario" onChange={e => setCep(e.target.value)} value={cep} />
          <input type="submit" value="Logar" onClick={handleConsult} />
        </form>

        {
          loading ? <Loading /> :
            apiError ? <ApiError /> :
              cepResult &&
              <div>
                <br /><label>Rua:</label><input type="text" value={cepResult.cep} />
                <br /><label>Complemento:</label><input type="text" value={cepResult.complemento} />
                <br /><label>Bairro:</label><input type="text" value={cepResult.bairro} />
                <br /><label>Cidade:</label><input type="text" value={cepResult.localidade} />
                <br /><label>Estado:</label><input type="text" value={cepResult.uf} />
                <br /><label>DDD:</label><input type="text" value={cepResult.ddd} />
              </div>
        }
      </div>
      <Footer />
    </>
  );
}

export default Users;