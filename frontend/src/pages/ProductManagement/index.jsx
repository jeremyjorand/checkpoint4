import Footer from "@components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import SProductManagement from "./style";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [categ, setCateg] = useState([]);
  const [choiceCateg, setChoiceCateg] = useState(0);
  const [choiceProduct, setChoiceProduct] = useState(0);

  const [form, setForm] = useState({
    nameProduct: "",
    categoryId: "",
    quantity: "",
  });
  const [formCategPut, setFormCategPut] = useState({
    id: "",
    quantity: "",
  });
  const hChangePut = (e) => {
    const { name, value, type, files } = e.target;
    let newValue = null;
    switch (type) {
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setFormCategPut({ ...formCategPut, [name]: newValue });
  };
  const hSubmitPut = (evt) => {
    evt.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/product/${formCategPut.id}`,
        formCategPut
      )
      .then(() => {
        setFormCategPut({ id: "", quantity: "" });
      });
  };
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
      .post(`${import.meta.env.VITE_BACKEND_URL}/product`, form)
      .then(({ data }) => {
        setForm(data);
      });
  };
  const [formCateg, setFormCateg] = useState({
    nameCategory: "",
  });
  const hChangeCateg = (e) => {
    const { name, value, type, files } = e.target;
    let newValue = null;
    switch (type) {
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setFormCateg({ ...formCateg, [name]: newValue });
  };
  const hSubmitCateg = (evt) => {
    evt.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/category`, formCateg)
      .then(({ data }) => {
        setForm(data);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/product`)
      .then(({ data }) => {
        setProducts(data);
      });
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/category`)
      .then(({ data }) => {
        setCateg(data);
      });
  }, []);
  return (
    <SProductManagement>
      <div>
        <h2>L'inventaire</h2>
        <section className="containerTable">
          <table>
            <thead>
              <tr key="a">
                <th className="t0">Catégories</th>
                <th className="t1">Nom du produit</th>
                <th className="t2">Quantité</th>
              </tr>
            </thead>
          </table>
          {products.map((product) => (
            <table className="productList">
              <tbody>
                <tr className="detailProduct" key={product.id}>
                  <td className="t0"> {product.nameCategory}</td>
                  <td className="t1"> {product.nameProduct}</td>
                  <td className="t2"> {product.quantity}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </section>
        <section className="mainProductManagement">
          <section className="left">
            <h3>Ajoute une catégorie</h3>
            <section>
              <input
                type="text"
                placeholder="Nom de la catégorie"
                name="nameCategory"
                onChange={hChangeCateg}
              />
              <input
                className="buttonLeft"
                type="button"
                value="Ajouter"
                onClick={hSubmitCateg}
              />
            </section>
          </section>
          <section className="center">
            <h3>Ajoute un produit</h3>
            <section>
              <select
                value={choiceCateg}
                label="text"
                type="select"
                name="categoryId"
                onChange={(e) => {
                  setChoiceCateg(e.target.value);
                }}
                onClick={hChange}
              >
                <option key="a" value={false}>
                  {" "}
                  Choisis une catégorie
                </option>
                {categ.map((c) => {
                  return (
                    <option key={c.id} value={c.id}>
                      {c.nameCategory}
                    </option>
                  );
                })}{" "}
                ;
              </select>
              <input
                type="text"
                placeholder="Nom du produit"
                name="nameProduct"
                onChange={hChange}
              />
              <input
                type="text"
                placeholder="Quantité"
                name="quantity"
                onChange={hChange}
              />
              <input
                className="buttonCenter"
                type="button"
                value="Ajouter"
                onClick={hSubmit}
              />
            </section>
          </section>

          <section className="right">
            <h3>Modifie une quantité</h3>
            <section>
              <select
                value={choiceCateg}
                label="text"
                type="select"
                name="categoryId"
                onChange={(e) => {
                  setChoiceCateg(e.target.value);
                }}
                onClick={hChangePut}
              >
                <option key="a" value={false}>
                  {" "}
                  Choisis une catégorie
                </option>
                {categ.map((c) => {
                  return (
                    <option key={c.id} value={c.id}>
                      {c.nameCategory}
                    </option>
                  );
                })}{" "}
                ;
              </select>
              <select
                value={choiceProduct}
                label="text"
                type="select"
                name="id"
                onChange={(e) => {
                  setChoiceProduct(e.target.value);
                }}
                onClick={hChangePut}
              >
                <option key="a" value={false}>
                  {" "}
                  Choisis un ingrédient
                </option>
                {products
                  .filter((p) => {
                    return p.categoryId === parseInt(choiceCateg); // eslint-disable-line
                  })
                  .map((p) => {
                    return (
                      <option key={p.id} value={p.id}>
                        {p.nameProduct}
                      </option>
                    );
                  })}{" "}
                ;
              </select>
              <input
                type="text"
                placeholder="Quantité"
                name="quantity"
                onChange={hChangePut}
              />
              <input
                className="buttonRight"
                type="button"
                value="Ajouter"
                onClick={hSubmitPut}
              />
            </section>
          </section>
        </section>
      </div>

      <Footer />
    </SProductManagement>
  );
}
