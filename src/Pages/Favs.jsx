import React from "react";
import Card from "../Components/Card";
import "../Styles/Card.css";
import "../Styles/Contact.css";

const Favs = ({}) => {
  const dentistsFavorites = JSON.parse(
    localStorage.getItem("odontologosFavoritos")
  );

  if (!dentistsFavorites || dentistsFavorites.length === 0) {
    return <h1> 😢 No favorites saved </h1>;
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
        ))}
      </div>
    </div>
  );
};

export default Favs;
