import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import Layout from '../../components/Layout/Layout';
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort';
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import "./Gallery.css";
import { Link } from "react-router-dom";
import eth from "./eth-logo.png";



const Gallery = (props) =>{
    const [cards, setCards] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [applySort, setApplySort] = useState(false);
    const [sortType, setSortType] = useState('name-ascending');
    
    useEffect(() => {
        const fetchCards = async () => {
            const allCards = await getProducts()
            setCards(allCards)
            setSearchResult(allCards)
            console.log(allCards)
        }
        fetchCards()
    }, [])

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
        console.log(event.target.value)
        const results = cards.filter((card) =>
          card.title.toLowerCase().includes(event.target.value.toLowerCase())
        )
        setSearchResult(results)
        setApplySort(true)
      }
    
      const handleSubmit = (event) => event.preventDefault()
    

    return(
            <div>
                <Layout user={props.user}>
                  <div className="search-sort">
                    <Sort className="sort" onSubmit={handleSubmit} handleSort={handleSort}/> 
                    <Search className="search" onSubmit={handleSubmit} handleSearch={handleSearch}/>           
                  </div>
                  <div className="gallery">
                    <div className="cards">
                        {searchResult?.map((card) =>(                                       
                                <div className="card-div" key={card._id}>
                                    <Link to={`/gallery/${card._id}`} > 
                                      <img className="image" src={card.image} alt={card.title}/> 
                                      <div className="hover-cards">
                                        <span className="text">
                                          <h3 className="card-title">{card.title}</h3>
                                          <div className="row">
                                              <div className="col">
                                                <img className="eth" src={eth} alt="eth"/>
                                              </div>
                                              <div className="col">
                                                <h3>{card.price}</h3>
                                              </div>
                                          </div>
                                        </span>
                                      </div>
                                    </Link>
                                </div>        
                              )
                        )} 
                    </div> 
                  </div>       
              </Layout>
            </div>
    )
}
export default Gallery