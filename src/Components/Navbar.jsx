import React from "react";
import { Link } from "react-router-dom";
import NavbarStyles from "../Styles/Navbar.module.css";
import { routes } from "../utils/routes";
import { useTheme } from "../Components/Context/global.context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const containerClassName = `${NavbarStyles.navbarContainer} ${
    theme === "dark" ? "dark" : ""
  }`;

  const titulosNavbar = ["Home", "Contact", "Favs"];
  const rutasNavbar = [routes.home, routes.contact, routes.favs];

  return (
    <nav>
      <div className={containerClassName}>
        <h4 className={NavbarStyles.tituloPrincipal}>DIGITAL HOUSE</h4>
        <div className={NavbarStyles.navbar}>
          {titulosNavbar.map((titulo, indice) => (
            <Link
              key={indice}
              to={rutasNavbar[indice]}
              className={NavbarStyles.link}
            >
              <h4>{titulo}</h4>
            </Link>
          ))}
          <button className={NavbarStyles.boton_navbar} onClick={toggleTheme}>
            {theme === "" ? "Dark Mode 🌒" : "Light Mode 🌕"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
