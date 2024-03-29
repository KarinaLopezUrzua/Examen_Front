import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../Styles/Card.css";
import "../Styles/Contact.css";

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

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const getSpecialityForId = (id) => {
    if ([1, 2, 5, 9, 10].includes(id)) {
      return "Orthodontics - Adult and Children";
    } else {
      return "Endodontist - Periodontist";
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
          <p style={{ marginBottom: "0px" }}>Dental surgeon Nº{dentist.id} </p>
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
            <h4>▪ {dentist.username} ▪</h4>
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
              <span>Phone: </span>
              {dentist.phone}
            </h4>
            <h4>
              <span>Website : </span>
              {dentist.website}
            </h4>
            <h4>
              <span>Code to schedule : </span>
              {dentist.address?.zipcode}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
