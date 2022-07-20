import { Link } from "react-router-dom";
import SHeader from "./style";

export default function Header() {
  return (
    <SHeader>
      <h1>Mon navire</h1>
      <section className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="/equipage">L'équipage</Link>
        <Link to="/inventaire">L'inventaire</Link>
        <Link to="/connexion">connexion</Link>
      </section>
    </SHeader>
  );
}
