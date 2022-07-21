import { Link } from "react-router-dom";
import SFooter from "./style";

export default function Footer() {
  return (
    <SFooter>
      <Link to="/preparationProjet">
        <div>Les préparations du projet</div>
      </Link>
    </SFooter>
  );
}
