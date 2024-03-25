import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Card.css";
import { Link } from "react-router-dom";

//TODO: Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentist, setDentist] = useState([]);
  const { id } = useParams();
  const getImageForId = (id) => {
    if ([1, 6, 7, 8].includes(id)) {
      return "/images/odontologo_h.jpg";
    } else {
      return "/images/odontologo_m.jpg";
    }
  };

  const addFav = () => {
    // TODO: Aqui iria la logica para agregar la Card en el localStorage
  };
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const getSpecialityForId = (id) => {
    if ([1, 2, 5, 9, 10].includes(id)) {
      return "Ortodoncia - Adulto e Infantil";
    } else {
      return "Endodoncista  - Periodoncista ";
    }
  };

  useEffect(() => {
    axios.get(url).then((res) => setDentist(res.data));
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div className="contenedor_contact">
        <div>
          <h1>Detail Dental Professional</h1>
          <p style={{ margin: "0px" }}>Cirujano Dentista Nº{dentist.id} </p>
          <p style={{ margin: "0px" }}> {getSpecialityForId(dentist.id)}</p>
          <div>
            <img
              className="img_card"
              src="/images/ID_Card.svg"
              alt="Imagen form"
            />
          </div>
        </div>
      </div>
      <div className="card-grid card card-detail">
        {dentist && (
          <div className="information_title">
            <h3>{dentist.name} </h3>
            <div>
              <img
                className="img_card"
                src={getImageForId(dentist.id)}
                alt={`Imagen odontologo ${dentist.id}`}
              />
            </div>
            <h4>
              <span>Email: </span>
              {dentist.email}
            </h4>
            <h4>
              <span>Telefono: </span>
              {dentist.phone}
            </h4>
            <h4>
              <span>Sitio web: </span>
              {dentist.website}
            </h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button onClick={addFav} className="boton_card">
                <Link to={"/favs"}>🌟 Add fav </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
