import Footer from "@components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import SSeaman from "./style";

export default function Seaman() {
  const [seamans, setSeamans] = useState([]);
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/seaman`).then(({ data }) => {
      setSeamans(data);
    });
  }, []);
  return (
    <SSeaman>
      <h2>L'équipage</h2>
      <div className="input">
        <input
          value={search}
          type="text"
          placeholder="Rechercher un collègue"
          onChange={(evt) => {
            setSearch(evt.target.value);
          }}
        />
        <button
          type="button"
          onClick={() => {
            setSearch("");
            setDataSearch(
              seamans.filter((seaman) => {
                return (
                  search === "" ||
                  seaman.lastname
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                  seaman.label.toLowerCase().includes(search.toLowerCase()) ||
                  seaman.firstname.toLowerCase().includes(search.toLowerCase())
                );
              })
            );
          }}
        >
          OK
        </button>
        <div />
      </div>

      <section className="containerSeaman">
        {dataSearch.map((seam) => (
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
