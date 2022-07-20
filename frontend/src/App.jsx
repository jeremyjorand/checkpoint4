import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Seaman from "@pages/Seaman";
import Product from "@pages/Product";
import SignIn from "@pages/SignIn";

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
            <Route path="/inventaire" element={<Product />} />;
            <Route path="/connexion" element={<SignIn />} />;
          </Routes>
        </main>
      </SGlobal>
    </div>
  );
}

export default App;
