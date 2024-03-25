//import React from 'react'
import Card from "../Components/Card";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";

//TODO: Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  //user : variable que contiene la informacion de la
  // setUsers : funcion que se usa para modificar para lo que tenga la variable
  const [user, setUsers] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";
  //la info viene dentro de data
  //userEffect la pedicion se hace cuando el usuario entre a esta vista

  useEffect(() => {
    axios.get(url).then((res) => setUsers(res.data));
  }, []);

  return (
    <main className="">
      <h1>😁 Sonrisas Saludables: Clínica Odontológica </h1>
      <div className="contenedorPagina">
        <h5>
          "En Sonrisas Saludables, nos dedicamos a cuidar tu salud dental con
          pasión y compromiso. Nuestro equipo de expertos en odontología está
          aquí para proporcionarte una atención personalizada y de calidad,
          centrada en tus necesidades y bienestar dental. Desde limpiezas
          preventivas hasta tratamientos avanzados, estamos comprometidos a
          mantener tus dientes y encías sanos para que puedas disfrutar de una
          sonrisa radiante y una salud dental óptima."
        </h5>
      </div>
      {/* TODO: DIVIDIR LA PANTALLA EN 2, COLOANDO UNA IMAGEN CON LA DESCRIPCION EN UNA LADO Y EN EL OTRO LAS CARD */}

      <div className="card-grid">
        {user.map((info) => (
          <Card key={`${info.id}`} info={info} />
        ))}
      </div>
    </main>
  );
};

export default Home;
