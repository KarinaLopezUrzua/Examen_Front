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
      const newFavorite = action.payload;
      if (state.favorites.some((fav) => fav.id === newFavorite.id)) {
        return state;
      } else {
        const newFavorites = [...state.favorites, newFavorite];
        localStorage.setItem(
          "odontologosFavoritos",
          JSON.stringify(newFavorites)
        );
        return { ...state, favorites: newFavorites };
      }

    case "DELETE_FAV":
      const deletedId = action.payload.id;
      const filteredFavorites = state.favorites.filter(
        (fav) => fav.id !== deletedId
      );
      localStorage.setItem(
        "odontologosFavoritos",
        JSON.stringify(filteredFavorites)
      );
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

  const addFavorite = (info) => {
    const favorites =
      JSON.parse(localStorage.getItem("odontologosFavoritos")) || [];
    const isAlreadyFavorite = favorites.some((fav) => fav.id === info.id);
    if (!isAlreadyFavorite) {
      dispatch({ type: "ADD_FAV", payload: info });
      localStorage.setItem(
        "odontologosFavoritos",
        JSON.stringify([...favorites, info])
      );
      alert("Added to favorites 💗!");
    } else {
      alert("The professional is already in favorites 🚫");
    }
  };

  const deleteFavorite = (info) => {
    const favorites =
      JSON.parse(localStorage.getItem("odontologosFavoritos")) || [];

    const updatedFavorites = favorites.filter((fav) => fav.id !== info.id);

    dispatch({ type: "DELETE_FAV", payload: info });
    localStorage.setItem(
      "odontologosFavoritos",
      JSON.stringify(updatedFavorites)
    );
    alert("Removed from favorites ❌!");
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
            <p> 🔍 More information </p>
          </Link>
        </div>
      )}

      {buttonType === "Add Fav" && (
        <button onClick={() => addFavorite(info)} className="boton_card ">
          <Link to={"/favs"}> 💗 Add fav </Link>
        </button>
      )}

      {buttonType === "schedule" && (
        <>
          <button
            onClick={() => deleteFavorite(info)}
            className="boton_card fix_width"
          >
            <Link to={"/home"}> ❌ Delete fav </Link>
          </button>
          <button className="boton_card">
            <Link to={"/contacto"}> 📆 To Schedule </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
