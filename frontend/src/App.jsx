import Home from "@pages/Home";
import { Routes, Route } from "react-router-dom";
import SGlobal from "./style";

function App() {
  return (
    <div>
      <SGlobal>
        <main>
          <Routes>
            <Route path="*" element={<Home />} />;
            <Route path="/" element={<Home />} />;
          </Routes>
        </main>
      </SGlobal>
    </div>
  );
}

export default App;
