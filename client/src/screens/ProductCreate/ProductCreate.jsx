// setState for Product - title, creator, image, description, price

import { useState } from "react";
import "./ProductCreate.css";
import Layout from "../../components/Layout/Layout.jsx";
import { Navigate } from "react-router-dom";
import { createProduct } from "../../services/products.js";

const ProductCreate = (props) => {
  const [product, setProduct] = useState({
    title: "",
    creator: "",
    image: "",
    description: "",
    price: "",
    copies: "",
    lowest: "",
    highest: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const created = await createProduct(product);
    setCreated({ created });
  };

  if (isCreated) {
    return <Navigate to="/gallery" />;
  }

  return (
    <div>
    <Layout>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={product.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-creator"
          placeholder="Creator"
          value={product.creator}
          name="creator"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={product.image}
          name="image"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-description"
          rows={8}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-price"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-copies"
          placeholder="Copies Sold"
          value={product.copies}
          name="copies"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-lowest"
          placeholder="Lowest Price"
          value={product.lowest}
          name="lowest"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-highest"
          placeholder="Highest Price"
          value={product.highest}
          name="highest"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
    </div>
  );
};

export default ProductCreate;
