import './Home.css'
// import { Layout, Carousel } from '../../components'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'

const Home = (props) => {
    
return (
    <div>
            <Layout />
            <div className='home'>
            <Carousel />
        </div>
        <div className="more">
            <h1>categories</h1>
        </div>
    </div>



)
}

export default Home