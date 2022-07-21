import Footer from "@components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import SProduct from "./style";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [categ, setCateg] = useState([]);
  const [choiceCateg, setChoiceCateg] = useState(0);
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
    <SProduct>
      <div>
        <h2>L'inventaire</h2>
        <section className="containInput ">
          <select
            value={choiceCateg}
            label="text"
            type="select"
            name="postId"
            onChange={(e) => {
              setChoiceCateg(e.target.value);
            }}
          >
            <option key="a" value={false}>
              {" "}
              Choisi une catégorie
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
        </section>

        <section className="containerTable">
          <table>
            <thead>
              <tr key="a">
                <th className="t1">Nom du produit</th>
                <th className="t2">Quantité</th>
              </tr>
            </thead>
          </table>
          {products
            .filter((product) => {
              return product.categoryId === parseInt(choiceCateg); // eslint-disable-line
            })
            .map((product) => (
              <table className="productList">
                <tbody>
                  <tr className="detailProduct" key={product.id}>
                    <td className="t1"> {product.nameProduct}</td>
                    <td className="t2"> {product.quantity}</td>
                  </tr>
                </tbody>
              </table>
            ))}
        </section>
      </div>
      <Footer />
    </SProduct>
  );
}
