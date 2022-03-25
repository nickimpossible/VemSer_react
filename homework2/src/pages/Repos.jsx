import { useEffect, useState } from 'react';
import Header from '../components/Header';

import "./Repos.css";

function Repos() {
    const [reposData, setReposData] = useState([]);

    async function fetchUserData() {
        let responseRepos = await fetch("https://api.github.com/users/nickimpossible/repos");
        responseRepos = await responseRepos.json();
        setReposData(responseRepos);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <Header />
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
        </>
    );
}
export default Repos;