import { Link } from "react-router-dom";
import { useState } from "react";
import SHeader from "./style";

export default function Header() {
  const [isActive, setActive] = useState(false);
  return (
    <SHeader>
      <h1>Mon navire</h1>
      <section className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/equipage">L'équipage</Link>
        <Link to="/inventaire">L'inventaire</Link>
        <Link to="/connexion">connexion</Link>
      </section>

      <div
        className={`burger ${isActive && "active"} navbarMobile`}
        onClick={() => setActive(!isActive)}
      >
        <span> </span>
        <ul>
          <Link to="/">
            <li className="mobile">Accueil</li>
          </Link>

          <Link to="/equipage">
            <li className="mobile">L'équipage</li>
          </Link>

          <Link to="/inventaire">
            <li className="mobile">L'inventaire</li>
          </Link>

          <Link to="/connexion">
            <li className="mobile">connexion</li>
          </Link>
        </ul>
      </div>
    </SHeader>
  );
}
