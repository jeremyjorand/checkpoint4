import Footer from "@components/Footer";
import exca from "@assets/excalidraw.png";
import figma from "@assets/figma.png";
import BL from "@assets/us.png";
import SProjectPreparation from "./style";

export default function ProjectPreparationHome() {
  return (
    <SProjectPreparation>
      <div className="container">
        <h2>Les préparation du projet</h2>
        <h3>Maquette Excalidraw</h3>
        <img src={exca} alt="maquette excalidraw" />
        <h3>Maquette Figma</h3>
        <img src={figma} alt="maquette figma" />
        <h3>BackLog</h3>
        <img src={BL} alt="backlog" />
      </div>
      <Footer />
    </SProjectPreparation>
  );
}
