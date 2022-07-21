import Footer from "@components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import SSeamanManagement from "./style";

export default function SeamanManagement() {
  const [posts, setPosts] = useState([]);
  const [choicePost, setChoicePost] = useState("");
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    avatar: "",
    postId: "",
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
  const [seamans, setSeamans] = useState([]);
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/seaman`).then(({ data }) => {
      setSeamans(data);
    });
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/post`).then(({ data }) => {
      setPosts(data);
    });
  }, []);
  return (
    <SSeamanManagement>
      <h2>Ajoute un membre d'équipage</h2>.
      <section className="containerTable">
        <table>
          <thead>
            <tr key="a">
              <th className="t1">Nom</th>
              <th className="t2">Prénom</th>
              <th className="t3">Poste</th>
            </tr>
          </thead>
        </table>
        {seamans.map((seam) => (
          <table className="seamanList">
            <tbody>
              <tr className="detailSeaman" key={seam.id}>
                <td className="t1"> {seam.lastname}</td>
                <td className="t2"> {seam.firstname}</td>
                <td className="t3">{seam.label}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </section>
      <section className="containInput">
        <input
          type="text"
          placeholder="Nom"
          name="lastname"
          onChange={hChange}
        />
        <input
          type="text"
          placeholder="Prénom"
          name="firstname"
          onChange={hChange}
        />
        <input
          type="text"
          placeholder="Avatar"
          name="avatar"
          onChange={hChange}
        />
        <select
          value={choicePost}
          label="text"
          type="select"
          name="postId"
          onChange={(e) => {
            setChoicePost(e.target.value);
          }}
          onClick={hChange}
        >
          <option key="a" value={false}>
            {" "}
            Poste occupé
          </option>
          {posts.map((post) => {
            return (
              <option key={post.id} value={post.id}>
                {post.label}
              </option>
            );
          })}{" "}
          ;
        </select>
        <input type="button" value="Envoyer" onClick={hSubmit} />
      </section>
      <Footer />
    </SSeamanManagement>
  );
}
