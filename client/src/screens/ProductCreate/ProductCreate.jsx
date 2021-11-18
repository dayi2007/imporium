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
      <Layout user={props.user}>
        <div className="create-container">
          <h2>Ready to sell? Upload your NFT!</h2>
          <form className="create-form" onSubmit={handleSubmit}>
            <input
              className="input-create-form"
              // className="input-title"
              id="input"
              placeholder="Title"
              value={product.title}
              name="title"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-create-form"
              // className="input-creator"
              id="input"
              placeholder="Creator"
              value={product.creator}
              name="creator"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-create-form"
              // className="input-image-link"
              id="input"
              placeholder="Image Link"
              value={product.image}
              name="image"
              required
              autoFocus
              onChange={handleChange}
            />
            <textarea
              className="textarea-create-form"
              // className="textarea-description"
              id="input"
              rows={8}
              placeholder="Description"
              value={product.description}
              name="description"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-create-form"
              // className="input-price"
              id="input"
              placeholder="Price"
              value={product.price}
              name="price"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-create-form"
              // className="input-copies"
              id="input"
              placeholder="Copies Sold"
              value={product.copies}
              name="copies"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-create-form"
              // className="input-lowest"
              id="input"
              placeholder="Lowest Price"
              value={product.lowest}
              name="lowest"
              required
              autoFocus
              onChange={handleChange}
            />
            <input
              className="input-create-form"
              // className="input-highest"
              id="input"
              placeholder="Highest Price"
              value={product.highest}
              name="highest"
              required
              autoFocus
              onChange={handleChange}
            />
            <button type="submit" className="submit-button">
              upload
            </button>
            <div className="create-drops">
              <div className="dropy dropy-1"></div>
              <div className="dropy dropy-2"></div>
              <div className="dropy dropy-3"></div>
              <div className="dropy dropy-4"></div>
              <div className="dropy dropy-5"></div>
            </div>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ProductCreate;
