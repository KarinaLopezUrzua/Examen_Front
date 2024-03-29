import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import "../Styles/Card.css";
import { useTheme } from "../Components/Context/global.context";

const getImageForId = (id) => {
  if ([1, 6, 7, 8].includes(id)) {
    return "/images/odontologo_h.jpg";
  } else {
    return "/images/odontologo_m.jpg";
  }
};

// Reductor
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      const isAlreadyFavorite = state.favorites.some(
        (fav) => fav.id === action.payload.id
      );
      if (!isAlreadyFavorite) {
        const newFavorites = [...state.favorites, action.payload];
        localStorage.setItem(
          "odontologosFavoritos",
          JSON.stringify(newFavorites)
        );
        alert("¡Añadido a favoritos!", action.payload);
        return { ...state, favorites: newFavorites };
      } else {
        alert("El dentista ya está en favoritos.");
        return state;
      }

    case "DELETE_FAV":
      const filteredFavorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      localStorage.setItem(
        "odontologosFavoritos",
        JSON.stringify(filteredFavorites)
      );
      alert("¡Eliminado de favoritos!");
      return { ...state, favorites: filteredFavorites };
    default:
      return state;
  }
};

const Card = ({ info, buttonType }) => {
  const { theme } = useTheme();
  const cardClass = theme === "dark" ? "card dark" : "card";

  const initialState = {
    favorites: JSON.parse(localStorage.getItem("odontologosFavoritos")) || [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={cardClass}>
      {info && (
        <div className="information_title" key={info.id + info.name}>
          <h3>{info.name} </h3>
          <h4>
            {info.id} ▪ {info.username} ▪
          </h4>
        </div>
      )}

      <div>
        <img
          className="img_card"
          src={getImageForId(info.id)}
          alt={`Imagen odontologo ${info.id}`}
        />
      </div>

      {info && (
        <div className="information" key={info.id + info.username}>
          <h5> Prof. Dental Surgeon </h5>
          <Link to={"/dentista/" + info.id}>
            <p>🔍 More information </p>
          </Link>
        </div>
      )}

      {buttonType === "Add Fav" && (
        <button
          onClick={() => {
            console.log("Botón de añadir favorito clickeado");
            console.log("Info:", info);
            dispatch({ type: "ADD_FAV", payload: info });
          }}
          className="boton_card"
        >
          <Link to={"/favs"}>💗 Add fav </Link>
        </button>
      )}

      {buttonType === "schedule" && (
        <button className="boton_card">
          <Link to={"/contacto"}>📆 To Schedule </Link>
        </button>
      )}

      {buttonType === "Delete Fav" && (
        <button
          onClick={() => {
            console.log("Botón de eliminar favorito clickeado");
            console.log("Info id eleiminado:", info.id);
            dispatch({ type: "DELETE_FAV", payload: info });
          }}
          className="boton_card"
        >
          <Link to={"/favs"}>❌ Delete fav </Link>
        </button>
      )}
    </div>
  );
};

export default Card;
