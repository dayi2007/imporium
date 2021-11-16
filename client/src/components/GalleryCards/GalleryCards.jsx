import { useEffect, useState } from "react";
import "./GalleryCards.css";
import { getProducts } from "../../services/products";
import GalleryCard from "../GalleryCard/GalleryCard";


const GalleryCards = () => {
    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        const fetchCards = async () => {
            const allCards = await getProducts()
            setCards(allCards)
 
        }
        fetchCards()
    }, [])
    // console.log(cards)

    cards.map((card, index) =>(
        // index < 8 ?(
            <GalleryCard
               _id={card.id} 
               name={card.name} 
               img={card.img} 
               key={index}             
            />)
        // ): null
    )

    return (
      <div>
          <div className="gallery-cards">{ 
          cards.map((card, index) =>{
        // index < 8 ?(
            <GalleryCard
               _id={card.id} 
               name={card.name} 
               img={card.img} 
               key={index}             
            />
            })
        }
            </div>
      </div>
    )
  }
  
  export default GalleryCards