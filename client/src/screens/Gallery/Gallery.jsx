import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import GalleryCard from "../../components/GalleryCard/GalleryCard.jsx";
import "./Gallery.css"

const Gallery = (props) =>{
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        const fetchCards = async () => {
            const allCards = await getProducts()
            setCards(allCards)
        }
        fetchCards()
    }, [])
    console.log(cards)

    return(
        <Layout user={props.user}>
            <div className="gallery">
                <h1>Gallery</h1>
                {cards?.map((card) =>(                
                <div className="card-div" key={card.id}>
                <img src={card.image} alt={card.title}/>
                </div>                      
                )
                )}         
            </div>
        </Layout>
    )
}
export default Gallery