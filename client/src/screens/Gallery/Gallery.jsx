import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Layout from "../../components/Layout/Layout";
import GalleryCard from "../../components/GalleryCard/GalleryCard.jsx";

const Gallery = (props) =>{
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        const fetchCards = async () => {
            const allCards = await getProducts()
            setCards(allCards)
        }
        fetchCards()
    }, [])

    return(
        <Layout user={props.user}>
            <div className="gallery">
                {cards.map((card, index) =>{
                    return(
                        <GalleryCard
                        _id={card.id} 
                        name={card.name} 
                        img={card.img} 
                        key={index}
                        />)
                    }
                )}         
            </div>
        </Layout>
    )
}
export default Gallery