import { Link } from 'react-router-dom'

const GalleryCard = (props) => {

    return(
        <div>
            <Link className='card' to={`/gallery/${props._id}`}>
            <img className='card-image' src={props.img} alt={props.name}/>
            {/* <div className='product-name'>{props.name}</div> */}
            {/* <div className='product-price'>{props.price}</div> */}
            <div>View</div>
            </Link>
        </div>
    )
}
export default GalleryCard