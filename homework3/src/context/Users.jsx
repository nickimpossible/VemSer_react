import { createContext, useState } from "react";

export const UsersContext = createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(0);
  const [submitText, setSubmitText] = useState("Adicionar usuario");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [carrer, setCarrer] = useState("");

  return (
    <UsersContext.Provider value={{
      users,
      setUsers,
      updateFlag,
      setUpdateFlag,
      updateIndex,
      setUpdateIndex,
      submitText,
      setSubmitText,
      name,
      setName,
      email,
      setEmail,
      carrer,
      setCarrer
    }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;