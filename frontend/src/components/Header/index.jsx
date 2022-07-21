import { Link } from "react-router-dom";
import { useState } from "react";
import SHeader from "./style";

export default function Header() {
  const [isActive, setActive] = useState(false);
  return (
    <SHeader>
      <Link to="/">
        <h1>Mon navire</h1>
      </Link>

      <section className="navbar">
        <Link to="/equipage">L'équipage</Link>
        <Link to="/gardeManger">Le garde manger</Link>
        <Link to="/gestionEquipage">Gestion de l'équipage</Link>
        <Link to="/gestionInventaire">Gestion de l'inventaire</Link>
      </section>

      <div // eslint-disable-line
        className={`burger ${isActive && "active"} navbarMobile`} // eslint-disable-line
        onClick={() => setActive(!isActive)} // eslint-disable-line
        onKeyDown={() => {}} // eslint-disable-line
      >
        <span> </span>
        <ul>
          <Link to="/equipage">
            <li className="mobile">L'équipage</li>
          </Link>

          <Link to="/gardeManger">
            <li className="mobile">Le garde manger</li>
          </Link>

          <Link to="/gestionEquipage">
            <li className="mobile">Gestion de l'équipage</li>
          </Link>
          <Link to="/gestionInventaire">
            <li className="mobile">Gestion de l'inventaire</li>
          </Link>
        </ul>
      </div>
    </SHeader>
  );
}
