import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import { getProduct, updateProduct, deleteProduct } from "../../services/products";
import { Navigate } from 'react-router';

const ProductEdit = () => {
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
    <Layout>
    <div>
      
      <form onSubmit={handleSubmit}>
        <input
          className="input-title"
          placeholder="Title"
          value={product.title}
          name='title'
          required
          autoFocus
          onChange={handleChange}
          />
          
          <input
          className="input-creator"
          placeholder="Creator"
          value={product.creator}
          name='creator'
          required
          autoFocus
          onChange={handleChange}
          />
          
          <input
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
          className="input-price"
          placeholder="Price"
          value={product.price}
          name='price'
          required
          autoFocus
          onChange={handleChange}
          />
          
          <input
          className="input-copies"
          placeholder="Copies"
          value={product.copies}
          name='copies'
          required
          autoFocus
          onChange={handleChange}
          />
          
          <input
          className="input-lowest"
          placeholder="Lowest Price"
          value={product.lowest}
          name='lowest'
          required
          autoFocus
          onChange={handleChange}
          />
          
          <input
          className="input-highest"
          placeholder="Highest Price"
          value={product.highest}
          name='highest'
          required
          autoFocus
          onChange={handleChange}
        />
        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
    </Layout>
  )
}

export default ProductEdit