import React from "react";
import Card from "../Components/Card";
import "../Styles/Card.css";
import "../Styles/Contact.css";

import { useTheme } from "../Components/Context/global.context";

//TODO: Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = ({}) => {
  const { theme } = useTheme();

  const dentistsFavorites = JSON.parse(
    localStorage.getItem("odontologosFavoritos")
  );

  if (!dentistsFavorites || dentistsFavorites.length === 0) {
    return <h1>No hay favoritos guardados.</h1>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="contenedor_contact">
        <div>
          <h1>Dentists Favs</h1>
          <p style={{ marginBottom: "0px" }}>
            Here you will find the dentists added to favorites
          </p>

          <div>
            <img
              className="img_card"
              src="/images/Doctor-rafiki.svg"
              alt="Imagen form"
            />
          </div>
        </div>
      </div>
      <div className="card-grid card-detail card-fav">
        {dentistsFavorites.map((dentist) => (
          <Card key={dentist.id} info={dentist} buttonType="schedule" />
          // <Card key={dentist.id} info={dentist} buttonType="Delete Fav" />
        ))}
      </div>
    </div>
  );
};

export default Favs;
