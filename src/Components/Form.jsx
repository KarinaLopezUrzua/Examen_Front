import React from "react";
import { useState, useEffect } from "react";
import FormStyles from "../Styles/Form.module.css";
import axios from "axios";

const Form = ({ onSubmitSuccess }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dentista: "",
  });

  const [err, setErr] = useState(false);
  const [dentistas, setDentistas] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(url).then((res) => setDentistas(res.data));
  }, []);

  //valida numeros chile 569xxxxxxxx
  const numRegex = /^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/;

  const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  //maneja los cambios en todos los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Valida que no sean nulos
    if (
      formulario.nombre === "" ||
      formulario.apellido === "" ||
      formulario.email === "" ||
      formulario.telefono === ""
    ) {
      setErr(true);
    } else {
      if (
        formulario.nombre.length + formulario.apellido.length < 5 ||
        !emailRegex.test(formulario.email) ||
        !numRegex.test(formulario.telefono)
      ) {
        setErr(true);
      } else {
        setErr(false);
        onSubmitSuccess(formulario.nombre, formulario.apellido);
        console.log(
          "Información del Usuario → Nombre: " +
            formulario.nombre +
            " " +
            formulario.apellido +
            " || " +
            "Mail: " +
            formulario.email +
            " || " +
            "Telefono: " +
            formulario.telefono +
            " || " +
            "Dentista: " +
            formulario.dentista
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={FormStyles.contenedorForm}>
        <div className={FormStyles.cardForm}>
          <div>
            <label className={FormStyles.labelForm}>
              {" "}
              ◽ Nombre Completo ◽
            </label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                className={`${FormStyles.inputForm} ${FormStyles.inputNombre}`}
                placeholder="Nombre"
              />

              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formulario.apellido}
                onChange={handleChange}
                className={FormStyles.inputForm}
                placeholder="Apellido"
              />
            </div>
          </div>

          <div>
            <label className={FormStyles.labelForm}> ◽ Email ◽</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
              className={`${FormStyles.inputForm} ${FormStyles.email}`}
              placeholder="alguien@example.es"
            />
          </div>

          <div>
            <label className={FormStyles.labelForm}> ◽ Telefono ◽</label>
            <input
              id="telefono"
              name="telefono"
              value={formulario.telefono}
              onChange={handleChange}
              className={`${FormStyles.inputForm} ${FormStyles.email}`}
              placeholder="569xxxxxxxx"
            ></input>
          </div>

          <div>
            <label className={FormStyles.labelForm}>
              {" "}
              ◽ Seleccionar profesional ◽
            </label>
            <select
              name="dentista"
              value={formulario.dentista}
              onChange={handleChange}
              className={`${FormStyles.inputForm} ${FormStyles.email}`}
            >
              <option value="">No tengo preferencia</option>
              {dentistas.map((dentista) => (
                <option key={dentista.id} value={dentista.name}>
                  {dentista.name} - Código: {dentista.address.zipcode}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className={FormStyles.boton}>
            Enviar
          </button>
        </div>
        <div>
          {err && (
            <h4 className={FormStyles.errorMensaje}>
              {" "}
              ⚠️ Por favor verifique su información nuevamente
            </h4>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
