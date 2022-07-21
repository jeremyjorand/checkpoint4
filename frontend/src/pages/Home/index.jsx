import Footer from "@components/Footer";
import SHome from "./style";

export default function Home() {
  return (
    <SHome>
      <div>
        <h2>Accueil</h2>
        <article className="containe">
          <p>
            Projet réalisé en un peu moins de 24H, de l'idée au resultat que
            vous voyez en passant par les maquettes et le backlog.
          </p>
          <p>
            Ce site est réalisé en React.JS pour le FrontEnd et Node.JS pour le
            BackEnd, la BDD a était réalisée en MySQL.
          </p>
          <p>
            Et comme je ne sais pas quoi mettre de plus, et qu'il est tard je
            vais continué avec un peu de Lorem.
          </p>
          <p>
            Curabitur ultrices, libero mattis porttitor pellentesque, dolor leo
            cursus mauris, id efficitur eros urna accumsan nisl. Nulla id tellus
            iaculis, tincidunt est at, pulvinar justo. Nulla a lobortis quam, eu
            fringilla purus. Aenean eu mollis turpis. Sed molestie lectus eget
            est venenatis, eu ultrices metus egestas. Sed vitae lacinia ante.
            Duis ullamcorper lobortis massa vel fringilla. Curabitur vitae
            porttitor quam. Nunc ut lorem laoreet, interdum mi a, tincidunt dui.
            Aliquam tempor diam vitae mi euismod tincidunt. Maecenas sed congue
            orci.
          </p>
        </article>
      </div>

      <Footer />
    </SHome>
  );
}
