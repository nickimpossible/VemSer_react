import { useEffect, useState } from 'react';
import Header from '../components/Header';

import "./Profile.css"

function Profile() {
    const [userAvatar, setUserAvatar] = useState();
    const [userName, setUserName] = useState();
    const [userLogin, setUserLogin] = useState();
    const [userBio, setUserBio] = useState();
    const [userCompany, setUserCompany] = useState();

    async function fetchUserData() {
        let responseUser = await fetch("https://api.github.com/users/nickimpossible");
        let { avatar_url, name, login, bio, company } = await responseUser.json();
        setUserAvatar(avatar_url);
        setUserName(name);
        setUserLogin(login);
        setUserBio(bio);
        setUserCompany(company);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <>
            <Header />
            <div className="profile-container">
                <h1>Perfil</h1>
                <div className="image-and-name">
                    <img src={userAvatar} alt="" />
                    <h2>{userName} - {userLogin}</h2>
                    <p>{userBio}</p>
                    <p>{userCompany}</p>
                </div>
            </div>
        </>
    );
}
export default Profile;