import { useContext } from "react";
import { UsersContext } from "../context/Users"

function UsersContainer() {
  const {
    users,
    setUsers,
    setUpdateFlag,
    setUpdateIndex,
    setSubmitText,
    setName,
    setEmail,
    setCarrer
  } = useContext(UsersContext);

  function removeUser(index) {
    setUsers([
      ...users.slice(0, index),
      ...users.slice(index + 1, users.length)
    ]);
  }

  function updateUser(index) {
    setUpdateIndex(index);
    setUpdateFlag(true);
    setName(users[index].name);
    setEmail(users[index].email);
    setCarrer(users[index].carrer);
    setSubmitText("Atualizar usuario");
  }

  return (
    <div className="users-container">
      {
        users.map((user, index) => (
          <div key={index}>
            <strong>Usuario: {user.name}</strong>
            <p>E-mail: {user.email}</p>
            <p>Profissão: {user.carrer}</p>
            <div>
              <button onClick={() => removeUser(index)}>Remover</button>
              <button onClick={() => updateUser(index)}>Atualizar</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default UsersContainer;