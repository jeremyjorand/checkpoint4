import Footer from "@components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import SSeaman from "./style";

export default function Seaman() {
  const [seamans, setSeamans] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/seaman`).then(({ data }) => {
      setSeamans(data);
    });
  }, []);
  return (
    <SSeaman>
      <h2>L'équipage</h2>
      <section className="containerSeaman">
        {seamans.map((seam) => (
          <div key={seam.id} className="containerAvatar">
            <div>
              <img className="avatarseaman" src={seam.avatar} alt="avatar" />
            </div>
            <div className="detailSeaman">
              <div> {seam.lastname}</div>
              <div> {seam.firstname}</div>
              <div>{seam.label}</div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </SSeaman>
  );
}
