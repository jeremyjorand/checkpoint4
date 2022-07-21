import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Seaman from "@pages/Seaman";
import Product from "@pages/Product";
import SignIn from "@pages/SignIn";
import ProjectPreparation from "@pages/ProjectPreparation";
import SeamanManagement from "@pages/SeamanManagement";
import ProductManagement from "@pages/ProductManagement";

import SGlobal from "./style";

function App() {
  return (
    <div>
      <SGlobal>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />;
            <Route path="/" element={<Home />} />;
            <Route path="/equipage" element={<Seaman />} />;
            <Route path="/gardeManger" element={<Product />} />;
            <Route path="/connexion" element={<SignIn />} />;
            <Route path="/gestionEquipage" element={<SeamanManagement />} />;
            <Route path="/gestionInventaire" element={<ProductManagement />} />;
            <Route path="/preparationProjet" element={<ProjectPreparation />} />
          </Routes>
        </main>
      </SGlobal>
    </div>
  );
}

export default App;
