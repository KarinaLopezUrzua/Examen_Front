import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Favs from "./Pages/Favs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./utils/routes";
import { useTheme } from "./Components/Context/global.context";

function App() {
  const { theme } = useTheme();

  const contenedorAppClass =
    theme === "dark" ? "dark contenedorApp" : "contenedorApp";

  return (
    <div className="App">
      <Navbar />
      <div className={contenedorAppClass}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.dentista} element={<Detail />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path="*" element={<Navigate to={routes.home} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
