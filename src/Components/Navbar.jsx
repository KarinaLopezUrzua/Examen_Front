import React from "react";
import { Link } from "react-router-dom";

import NavbarStyles from "../Styles/Navbar.module.css";
import { routes } from "../utils/routes";

//TODO: Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const titulosNavbar = ["Home", "Contacto", "Favs"];
  const rutasNavbar = [
    routes.home,
    routes.contact,
    // routes.dentista,
    routes.favs,
  ];

  return (
    <nav>
      <div className={NavbarStyles.navbarContainer}>
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
          {/* TODO: Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button className={NavbarStyles.boton_navbar}>Change theme 🌓</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
