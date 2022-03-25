import triforceLogo from "../images/triforce.jpg";

function Header() {
    return (
        <div className="backgroud-defaut">
            <header>
                <br />
                <div className="container">
                    <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="50" />
                    <span>Melhor aluno Vem ser de todos os tempos</span>

                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/sobre">sobre</a></li>
                            <li><a href="/contato">contatos</a></li>
                        </ul>
                    </nav>
                    <br />
                </div>
            </header>
        </div>
    );
}
export default Header;