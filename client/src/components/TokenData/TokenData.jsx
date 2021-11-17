import './TokenData.css'
import { Link } from 'react-router-dom';
import eth from './eth-logo.png'
import imp from './implogo.png'



const TokenData = ({ product, updateProduct, deleteProduct }) => {
  // probably passing updateProduct and deleteProduct elsewhere
  return (
    <div className="token-data-card">
      
      <section className="header">
      <h1>Imporium Token Data</h1>
      </section>
      
      <section className="description">
      <h4 className="desc-title">Description</h4>
      <p>{product.description}</p>
      </section>
      
      <div>
      <section className="price-history">
        <h4 className="price-title">Price History</h4>
          
          <section className="history-wrapper">
            <section className="copies-wrapper">
              <h6 className="subtitle-price">Copies Sold:</h6>
              <p>{product.copies}</p>
            </section>
          
          <section className="lowest-wrapper">
            <h6 className="subtitle-price">Lowest Price:</h6>
            <p>{product.lowest}</p>
          </section>
          
          <section className="highest-wrapper">
            <h6 className="subtitle-price">Highest Price:</h6>
            <p>{product.highest}</p>
          </section>
        </section>
        </section>
      </div>
    <div className="foots">
        <section className="button-wrapper">
          <button className="buy">Buy Now</button>
          <button className="offer">Make Offer</button>
          <Link className="edit" to={`/gallery/${product._id}/edit`}><p>Edit NFT</p></Link>
        </section>
        
        <section className="token-footer">
          <img className="ether-img" src={eth} />
          <h2 className="price-disp">{product.price}</h2>
          <img className="imp-logo" src={imp} />
        </section>
        {/* <div className="trigs">
    <div className="trig trig-1"></div>
    <div className="trig trig-2"></div>
    <div className="trig trig-3"></div>
    <div classN="trig trig-4"></div>
    <div class="trig trig-5"></div>
  </div> */}
      </div>
    </div>
  )
}

export default TokenData