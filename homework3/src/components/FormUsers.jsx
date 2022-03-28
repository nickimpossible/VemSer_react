import { useContext } from "react";
import { UsersContext } from "../context/Users"

function FormUsers() {
  const {
    users,
    setUsers,
    updateFlag,
    setUpdateFlag,
    updateIndex,
    submitText,
    setSubmitText,
    name,
    setName,
    email,
    setEmail,
    carrer,
    setCarrer
  } = useContext(UsersContext);

  function addUser(e) {
    e.preventDefault();
    if (!updateFlag) {
      setUsers(users => [...users, { name, email, carrer }]);
    } else {
      setUsers([
        ...users.slice(0, updateIndex - 1),
        { name, email, carrer },
        ...users.slice(updateIndex + 1, users.length)
      ]);
      setUpdateFlag(false)
      setSubmitText("Adicionar usuario");
    }
    setName("");
    setEmail("");
    setCarrer("");
  }

  return (
    <form>
      <h1>Trabalhador</h1>
      <input type="text" placeholder="Digite seu nome" onChange={e => setName(e.target.value)} value={name} />
      <input type="text" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)} value={email} />
      <input type="text" placeholder="Digite sua Profissão" onChange={e => setCarrer(e.target.value)} value={carrer} />
      <input type="submit" value={submitText} onClick={addUser} />
    </form>
  );
}

export default FormUsers;