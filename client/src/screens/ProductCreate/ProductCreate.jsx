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
        <div className='create-container'>
          <h2>Upload NFT</h2>
      <form className="create-form" onSubmit={handleSubmit}>
        <input className='input-create-form'
          className="input-title"
          placeholder="Title"
          value={product.title}
          name="title"
          required
          autoFocus
          onChange={handleChange}
        />
        <input className='input-create-form'
          className="input-creator"
          placeholder="Creator"
          value={product.creator}
          name="creator"
          required
          autoFocus
          onChange={handleChange}
        />
        <input className='input-create-form'
          className="input-image-link"
          placeholder="Image Link"
          value={product.image}
          name="image"
          required
          autoFocus
          onChange={handleChange}
        />
        <input className='input-create-form'
          className="textarea-description"
          rows={8}
          placeholder="Description"
          value={product.description}
          name="description"
          required
          autoFocus
          onChange={handleChange}
        />
        <input className='input-create-form'
          className="input-price"
          placeholder="Price"
          value={product.price}
          name="price"
          required
          autoFocus
          onChange={handleChange}
        />
        <input className='input-create-form'
          className="input-copies"
          placeholder="Copies Sold"
          value={product.copies}
          name="copies"
          required
          autoFocus
          onChange={handleChange}
        />
            <input
              className='input-create-form'
          className="input-lowest"
          placeholder="Lowest Price"
          value={product.lowest}
          name="lowest"
          required
          autoFocus
          onChange={handleChange}
        />
            <input
              className='input-create-form'
          className="input-highest"
          placeholder="Highest Price"
          value={product.highest}
          name="highest"
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Upload
        </button>
          {/* <div className='create-card'>
            <img className='create-image' src='https://lh3.googleusercontent.com/vlQEqUysLvGutBwQyeA2ELMkgNuy3AqaZGvusXYWIvfZ57PSOY2rF9bTKfPfH63gXTWm2TvIt2BJz_KZcuE9L7lqywJOs47MVuXd5g=s0'>
            </img>
          </div> */}
           <div class="create-drops">
            <div class="dropy dropy-1"></div>
            <div class="dropy dropy-2"></div>
            <div class="dropy dropy-3"></div>
            <div class="dropy dropy-4"></div>
            <div class="dropy dropy-5"></div>
          </div> 
      </form>
      </div>
    </Layout>
    </div>
  );
};

export default ProductCreate;
