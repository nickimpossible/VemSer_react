import { useNavigate } from "react-router-dom";

function PageLinks() {
  const navigate = useNavigate();

  return (
    <ul>
      <li><button onClick={() => navigate('/')}>Home</button></li>
      <li><button onClick={() => navigate('/users')}>Usuarios</button></li>
      <li><button onClick={() => navigate('/cep')}>Consultar CEP</button></li>
    </ul>
  );
}

export default PageLinks;