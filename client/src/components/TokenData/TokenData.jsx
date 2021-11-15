

const TokenData = ({product, updateProduct, deleteProduct}) => {
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
          <button className="edit">Edit NFT</button>
        </section>
        
        <section className="token-footer">
          <img className="ether-img" src="#" />
          <h2>{product.price}</h2>
          <img className="imp-logo" src="#" />
        </section>
        
      </section>
    </div>
  )
}

export default TokenData