import logo from "../images/tenor.gif";

function ApiError (){
  return(
    <div>
      <h2 className="Erro">Erro na API</h2>
      <img src={logo} alt="Gif mostrando erro com a mensagem Mental State Unstable" />
    </div>
  )
}
export default ApiError;