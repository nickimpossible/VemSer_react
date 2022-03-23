import triforceLogo from "./images/triforce.jpg";

function App() {
  return (
    <div className="App">
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
      <main className="container">
        <h1>Estamos aprendendo HTML e Css com o melhor professor de todos</h1>
        <ul>
          <li>
            <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="100" />
            <span>triforce 1</span>
          </li>
          <li>
            <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="100" />
            <span>triforce 2</span>
          </li>
          <li>
            <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="100" />
            <span>triforce 3</span>
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam enim sapiente, eius velit ipsam nihil quod. Numquam nesciunt assumenda molestias veniam temporibus voluptate maxime quisquam quos? Maxime labore ipsa quas, amet velit ducimus voluptates veritatis dignissimos deleniti, nesciunt, nemo nisi fugit recusandae ex assumenda dolor quidem eius laudantium. Consequatur.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ad exercitationem voluptates repellat, obcaecati tempore dolores veniam veritatis fuga corporis! Cupiditate praesentium deserunt sapiente, quisquam doloremque ex vitae voluptatem aspernatur fugit aliquid nihil ducimus autem debitis, quo eius nesciunt iste mollitia ratione! Sed pariatur aspernatur rem, nisi velit reiciendis, atque labore aut nam, consectetur mollitia nihil ullam ipsa cum modi? Tempora eveniet incidunt voluptate beatae? Molestias libero esse blanditiis quisquam.</p>
      </main>

      <section className="container">
        <h2>Endereço da DBC</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.4087503063893!2d-51.2034851848858!3d-29.996417481899837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1645476662796!5m2!1spt-BR!2sbr" width="500" height="450" loading="lazy"></iframe>
      </section>
      <br /><br />

      <section className="backgroud-defaut">
        <div className="container" >

          <br />

          <footer >
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">sobre</a></li>
                <li><a href="/contato">contatos</a></li>
              </ul>
            </nav>
            <address>Tv. São José, 455 - Navegantes, Porto Alegre - RS, 90240-200</address>
            <br /><br />

          </footer>
        </div>
      </section>
    </div>
  );
}

export default App;
