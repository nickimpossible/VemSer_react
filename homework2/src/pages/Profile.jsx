import { useEffect, useState } from 'react';

function Profile() {
    const [userAvatar, setUserAvatar] = useState();
    const [userLogin, setUserLogin] = useState();
    
    async function fetchUserData() {
        let responseUser = await fetch("https://api.github.com/users/nickimpossible");
        let { avatar_url, login } = await responseUser.json();
        setUserAvatar(avatar_url);
        setUserLogin(login);
    }
    
    useEffect(() => {
        fetchUserData();
    }, []);
    
    return (
        <div className="profile-container">
            <h1>Perfil</h1>
            <div className="image-and-name">
                <img src={userAvatar} alt="" />
                <p>{userLogin}</p>
            </div>
        </div>
    );
}
export default Profile;