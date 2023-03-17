import React, { createContext, useState } from "react";
import { useContext } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Contexto = createContext([]); /*Aqui Creamos el Contexto */

const List = () => {
  const users = useContext(Contexto); /*Aqui Usamos el Contexto */
  return (
    <>
      {users.map((user) => (
        <p>{user.username}</p>
      ))}
    </>
  );
};

const Home = () => {
  const [state, setState] = useState([]);

  const getData = async () => {
    const httpResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await httpResponse.json();
    setState(users);
  };

  return (
    /*Aqui Damos Valor al Contexto */
    <>
      <Contexto.Provider value={state}>
        <button onClick={() => getData()}>Click Me!</button>
        <List />
      </Contexto.Provider>
    </>
  );
};

export default Home;
