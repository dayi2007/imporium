import FullCard from "../../components/FullCard/FullCard"

const ProductEdit = () => {


  return (
    <div>
      <FullCard />
      <form>
        <input
          className="input-title"
          placeholder="Title"
          value={product.title}
          title='title'
          required
          autoFocus
        />
        
      </form>
    </div>
  )
}

export default ProductEdit