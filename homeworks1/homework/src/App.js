import Header from "./components/Header";
import Main from "./components/Main";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Home */}
      {/* <Header />
      <Main />
      <Container />
      <Footer /> */}

      {/* about */}
      <Header />
      <div className="container">
        <form>
          <label>
            Username:
            <input type="text" name="username" placeholder="digite seu usuario" />
            Email:
            <input type="email" name="email" placeholder="digite seu email" />
          </label>
          <label>
            Qual o motivo do contato?
          </label>
          <select name="questions" id="questions">
            <option value="q1">html é easy de mais</option>
            <option value="q2">Quer saber porque triforce?</option>
            <option value="q3">Quer elogiar minha tentativa de fazer um site?</option>
            <option value="q3">Quer xingar alguém?</option>
          </select>
          <label>
            Sua mensagem:
          </label>
          <textarea cols="30" rows="10"></textarea>
          <input type="submit" value="salvar" />
        </form>
      </div>

      <section class="backgroud-defaut">
        <div class="container" >
        </div>
      </section>
      <br /> 
      <Footer />
    </div>
  );
}

export default App;
