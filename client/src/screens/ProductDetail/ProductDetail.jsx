import { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout.jsx';
import { useParams } from 'react-router-dom';
import { deleteProduct, getProduct } from '../../services/products.js';
import { updateProduct } from '../../services/products.js';
import FullCard from '../../components/FullCard/FullCard.jsx';
import TokenData from '../../components/TokenData/TokenData.jsx';
import './ProductDetail.css';


const ProductDetail = (props) => {

  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id)
      setProduct(product)
      setLoaded(true)
      console.log(product)
    }
    fetchProduct()
  }, [id])

  if (!isLoaded) {
    return <h1 className="fetch-product">Rendering NFT</h1>
  }
  

  return (
    <div>
      
    <div className="product-detail-page">
      
      <Layout user={props.user}>
      
        <div className="innerdiv">
          <div className="carddiv">
        <FullCard
          product={product}
          />
          </div>
          <div className="tokendiv">
        <TokenData
          product={product}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
        />
        </div>
        </div>
        
        </Layout>

      </div>
  </div>
  )
  }

export default ProductDetail