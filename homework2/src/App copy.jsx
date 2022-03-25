import { useEffect, useState } from 'react';
import './App.css';
import { FaAlignJustify } from "react-icons/fa";

function App() {
  const [userAvatar, setUserAvatar] = useState();
  const [userLogin, setUserLogin] = useState();
  const [reposData, setReposData] = useState([]);

  async function fetchUserData() {
    let responseUser = await fetch("https://api.github.com/users/nickimpossible");
    let { avatar_url, login } = await responseUser.json();
    setUserAvatar(avatar_url);
    setUserLogin(login);

    let responseRepos = await fetch("https://api.github.com/users/nickimpossible/repos");
    responseRepos = await responseRepos.json();
    setReposData(responseRepos);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <body>

      <header>
        <FaAlignJustify />
      </header>

      <div className="App">

        <div className="profile-container">
          <h1>Perfil</h1>
          <div className="image-and-name">
            <img src={userAvatar} alt="" />
            <p>{userLogin}</p>
          </div>
        </div>

        <div className="repos-container">
          <h1>Repositórios</h1>
          {
            reposData.map(repo => (
              <div key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
                <p>{repo.language}</p>
              </div>
            ))
          }
        </div>
        <div className='app'>
          <h1>Contact Me</h1>
          <form>
            <label >
              <strong>Nome:</strong>
              <input type="text" name='name' />
              <strong>Assunto:</strong>
              <input type="text" assunto='assunto' />
              <strong>Digite a mensagem:</strong>
              <textarea name="mensagem" cols="30" rows="10" />
            </label>
          </form>
        </div>
      </div>
    </body>

  );
}

export default App;