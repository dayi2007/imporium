import './TokenData.css'
import { Link } from 'react-router-dom';
import eth from './eth-logo.png'



const TokenData = ({ product, updateProduct, deleteProduct }) => {
  // probably passing updateProduct and deleteProduct elsewhere
  return (
    <div className="token-data-card">
      
      <section className="header">
      <h1>Imporium Token Data</h1>
      </section>
      
      <section className="description">
      <h4>Description</h4>
      <p>{product.description}</p>
      </section>
      
      <section className="price-history">
        <h4>Price History</h4>
          
          <section className="history-wrapper">
            <section className="copies-wrapper">
              <h6>Copies Sold:</h6>
              <p>{product.copies}</p>
            </section>
          
          <section className="lowest-wrapper">
            <h6>Lowest Price:</h6>
            <p>{product.lowest}</p>
          </section>
          
          <section className="highest-wrapper">
            <h6>Highest Price:</h6>
            <p>{product.highest}</p>
          </section>
        
        </section>

        <section className="button-wrapper">
          <button className="buy">Buy Now</button>
          <button className="offer">Make Offer</button>
          {/* Need Route & Need to pass product to screen */}
          <Link to={`/gallery/${product._id}/edit`}>Edit NFT</Link>
        </section>
        
        <section className="token-footer">
          <img className="ether-img" src={eth} />
          <h2>{product.price}</h2>
          <img className="imp-logo" src="#" />
        </section>
        
      </section>
    </div>
  )
}

export default TokenData