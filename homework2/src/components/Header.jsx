import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="bemvindo">
                <h2>Seja Bem-Vindo!!</h2>
            </div>
            <div className="botoes">
                <button onClick={() => navigate('/')}>Profile</button>
                <button onClick={() => navigate('/repos')}>Repositórios</button>
                <button onClick={() => navigate('/contact')}>Contato</button>
            </div>

        </div>
    );
}
export default Header;