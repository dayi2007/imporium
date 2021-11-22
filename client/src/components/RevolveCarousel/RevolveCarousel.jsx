import './RevolveCarousel.css'
import { Link } from "react-router-dom"

const RevolveCarousel = (props) => {

    return (
        <div className="landing-page-two">
                        <h2 id="featuring-title">{props.collectionName}</h2>
            <div className="scope-container">

                <div className="scope">
                    <span id="style1" styles={"--i:1;"}><Link to={`/gallery/${props._id[0]}`}><img id="img-rotate" src={props.images[0]} alt="not found"/></Link></span>
                    <span id="style2" styles={"--i:2;"}><Link to={`/gallery/${props._id[1]}`}><img id="img-rotate" src={props.images[1]} alt="not found"/></Link></span>
                    <span id="style3" styles={"--i:3;"}><Link to={`/gallery/${props._id[2]}`}><img id="img-rotate" src={props.images[2]} alt="not found"/></Link></span>
                    <span id="style4" styles={"--i:4;"}><Link to={`/gallery/${props._id[3]}`}><img id="img-rotate" src={props.images[3]} alt="not found"/></Link></span>
                    <span id="style5" styles={"--i:5;"}><Link to={`/gallery/${props._id[4]}`}><img id="img-rotate" src={props.images[4]} alt="not found"/></Link></span>
                    <span id="style6" styles={"--i:6;"}><Link to={`/gallery/${props._id[5]}`}><img id="img-rotate" src={props.images[5]} alt="not found"/></Link></span>
                    <span id="style7" styles={"--i:7;"}><Link to={`/gallery/${props._id[6]}`}><img id="img-rotate" src={props.images[6]} alt="not found"/></Link></span>
                    <span id="style8" styles={"--i:8;"}><Link to={`/gallery/${props._id[7]}`}><img id="img-rotate" src={props.images[7]} alt="not found"/></Link></span>
                </div>
            </div>
        </div>
    )
}

export default RevolveCarousel