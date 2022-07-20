import Footer from "@components/Footer";
import axios from "axios";
import { useState } from "react";
import SSeamanManagement from "./style";

export default function SeamanManagement() {
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    avatar: "",
    postId: 0,
  });
  const hChange = (e) => {
    const { name, value, type, files } = e.target;
    let newValue = null;
    switch (type) {
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setForm({ ...form, [name]: newValue });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/seaman`, form)
      .then(({ data }) => {
        setForm(data);
      });
  };
  return (
    <SSeamanManagement>
      <h2>Ajoute un membre d'équipage</h2>
      <input type="text" placeholder="Nom" name="lastname" onChange={hChange} />
      <input
        type="text"
        placeholder="Prénom"
        name="firstname"
        onChange={hChange}
      />

      <input type="text" placeholder="Poste" name="postId" onChange={hChange} />

      <input
        type="text"
        placeholder="Avatar"
        name="avatar"
        onChange={hChange}
      />
      <input type="button" onClick={hSubmit} />

      <Footer />
    </SSeamanManagement>
  );
}
