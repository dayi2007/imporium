import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Layout from '../../components/Layout/Layout';
// import GalleryCard from "../../components/GalleryCard/GalleryCard.jsx";
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search"
import "./Gallery.css"

const Gallery = (props) =>{
    const [cards, setCards] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [applySort, setApplySort] = useState(false);
    const [sortType, setSortType] = useState('name-ascending');
    
    useEffect(() => {
        const fetchCards = async () => {
            const allCards = await getProducts()
            setCards(allCards)
        }
        fetchCards()
    }, [])
    console.log(cards)

    const handleSort = (type) => {
        if (type !== '' && type !== undefined) {
          setSortType(type)
        }
        switch (type) {
          case 'name-ascending':
            setSearchResult(AZ(searchResult))
            break
          case 'name-descending':
            setSearchResult(ZA(searchResult))
            break
          case 'price-ascending':
            setSearchResult(lowestFirst(searchResult))
            break
          case 'price-descending':
            setSearchResult(highestFirst(searchResult))
            break
          default:
            break
        }
      }
    
      if (applySort) {
        handleSort(sortType)
        setApplySort(false)
      }
    
      const handleSearch = (event) => {
        const results = cards.filter((card) =>
          card.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setSearchResult(results)
        setApplySort(true)
      }
    
      const handleSubmit = (event) => event.preventDefault()
    

    return(
            <div className="gallery">
                <Layout user={props.user}>
                    <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
                    <Sort onSubmit={handleSubmit} handleSort={handleSort} />
                    <h1>Gallery</h1>
                    <div className="cards">
                        {cards?.map((card) =>(                
                            <div className="card-div" key={card.id}>
                                <img src={card.image} alt={card.title}/>
                            </div>                      
                        )
                        )} 
                    </div>        
                </Layout>
            </div>
    )
}
export default Gallery