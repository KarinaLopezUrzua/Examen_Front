import React from "react";
import Form from "../Components/Form";
import "../Styles/Contact.css";
import { useState } from "react";
import { useTheme } from "../Components/Context/global.context";

const Contact = () => {
  const { theme } = useTheme();
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
          <p style={{ marginBottom: "0px" }}>
            Fill out this form and we will contact you
          </p>

          <div>
            <img src="/images/completeForm.svg" alt="Imagen form" />
          </div>
        </div>

        <div>
          <Form key="form" onSubmitSuccess={handleFormSubmitSuccess} />
        </div>
      </div>{" "}
      {showSuccessMessage && (
        <h2 className={`successMessage ${theme === "dark" ? "dark" : ""}`}>
          Thank you{" "}
          <span>
            {nombre} {apellido}{" "}
          </span>
          🎉 you have been registered in our system, we will contact you when
          before by e-mail.
        </h2>
      )}
    </div>
  );
};

export default Contact;
