import React from "react";
import Form from "../Components/Form";
import { useState } from "react";

//TODO: Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

  const handleFormSubmitSuccess = (nombre, apellido) => {
    setNombre(nombre);
    setApellido(apellido);
    setShowSuccessMessage(true);
  };

  return (
    <div>
      <div className="contenedor_contact">
        <div>
          <h1>Want to know more?</h1>
          <div>
            <img
              className="img_card"
              src="/images/completeForm.svg"
              alt="Imagen form"
            />
          </div>
        </div>

        <div>
          <Form key="form" onSubmitSuccess={handleFormSubmitSuccess} />
        </div>
      </div>{" "}
      {showSuccessMessage && (
        <h2 className="successMessage">
          Gracias{" "}
          <span>
            {nombre} {apellido}{" "}
          </span>
          🎉 has quedado registrado en nuestro sistema, te contactaremos cuando
          antes vía mail.
        </h2>
      )}
    </div>
  );
};

export default Contact;
