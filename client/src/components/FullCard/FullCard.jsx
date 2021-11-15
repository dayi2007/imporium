import './FullCard.css';

const FullCard = ({product}) => {
  return (
    <div className="full-card">
      <img className="full-image" src={product.image} />
      <h2 className="full-title">{product.title}</h2>
      <h3 className="full-creator">{product.creator}</h3>
    </div>
  )
}

export default FullCard