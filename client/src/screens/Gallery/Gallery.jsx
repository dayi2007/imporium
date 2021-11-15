import { useState, useEffect } from "react";

const Gallery = () =>{
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