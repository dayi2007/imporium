import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import { getProduct, updateProduct, deleteProduct } from "../../services/products";
import { Navigate } from 'react-router';
import './ProductEdit.css';

const ProductEdit = (props) => {
  const [product, setProduct] = useState({
    title: '',
    creator: '',
    image: '',
    description: '',
    price: '',
    copies: '',
    lowest: '',
    highest: ''
  })

  const [isUpdated, setUpdated] = useState(false)
  let {id} = useParams()

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
    }
    fetchProduct()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updateProduct(id, product)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Navigate to={`/products/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div className="edit-page">
        
        <section className="preview-card">
          <img className="preview-image" src={product.image} />
          <h2 className="preview-title">{product.title}</h2>
          <h3 className="preview-creator">{product.creator}</h3>
        </section> 
      
        <section className="form-wrapper">
          <form className="form-edit" onSubmit={handleSubmit}>
            <input
              className="for-inputs"
              className="input-title"
              placeholder="Title"
              value={product.title}
              name='title'
              required
              autoFocus
              onChange={handleChange}
          />
          
            <input
            className="for-inputs"
            className="input-creator"
            placeholder="Creator"
            value={product.creator}
            name='creator'
            required
            autoFocus
            onChange={handleChange}
          />
          
            <input
            className="for-inputs"
            className="input-image"
            placeholder="Image URL"
            value={product.image}
            name='image'
            required
            autoFocus
            onChange={handleChange}
          />
          
            <textarea
            
            className="input-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={product.description}
            name='description'
            required
            autoFocus
            onChange={handleChange}
          />
          
            <input
              className="for-inputs"
            className="input-price"
            placeholder="Price"
            value={product.price}
            name='price'
            required
            autoFocus
            onChange={handleChange}
          />
          
            <input
              className="for-inputs"
            className="input-copies"
            placeholder="Copies"
            value={product.copies}
            name='copies'
            required
            autoFocus
            onChange={handleChange}
          />
          
            <input
              className="for-inputs"
            className="input-lowest"
            placeholder="Lowest Price"
            value={product.lowest}
            name='lowest'
            required
            autoFocus
            onChange={handleChange}
          />
          
            <input
              className="for-inputs"
            className="input-highest"
            placeholder="Highest Price"
            value={product.highest}
            name='highest'
            required
            autoFocus
            onChange={handleChange}
            />
          
        <section className="buttons">  
          <button type="submit" className="save-button">Save</button>
          <button
              className='delete-button'
              onClick={() => deleteProduct(product._id)}>Delete
          </button>
            </section>
            <div className="drops">
    <div className="dropx drop-1"></div>
    <div className="dropx drop-2"></div>
    <div className="dropx drop-3"></div>
    <div classN="dropx drop-4"></div>
    <div class="dropx drop-5"></div>
  </div>
          </form>
      </section>
    </div>
    </Layout>
  )
}

export default ProductEdit