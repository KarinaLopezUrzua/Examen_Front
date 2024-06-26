import React from "react";
import "../Styles/Footer.css";
import { useTheme } from "../Components/Context/global.context";

const Footer = () => {
  const { theme } = useTheme();

  const footerClassName = theme === "dark" ? "footer dark" : "footer";

  return (
    <footer className={footerClassName}>
      <div style={{ marginBottom: "5px" }}>
        <p style={{ display: "inline" }}>Powered by</p>
        <img className="styleImg" src="/images/DH.png" alt="DH-logo" />
      </div>

      <div className={"contenedor_logos"}>
        <img
          className="styleImg2"
          src="/images/ico-facebook.png"
          alt="dh-logo"
        />
        <img
          className="styleImg2"
          src="/images/ico-instagram.png"
          alt="dh-logo"
        />

        <a
          className="contened"
          href="https://www.digitalhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="styleImg1" src="/images/DH.ico" alt="dh-logo" />
        </a>

        <p style={{ margin: "6px 0px" }}>
          Collaboration of <span>Karina López</span>
        </p>

        <a
          className="contened"
          href="https://github.com/KarinaLopezUrzua"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="styleImg1" src="/images/Git.png" alt="git-logo" />
        </a>
        <img className="styleImg2" src="/images/ico-tiktok.png" alt="dh-logo" />
        <img
          className="styleImg2"
          src="/images/ico-whatsapp.png
        "
          alt="dh-logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
