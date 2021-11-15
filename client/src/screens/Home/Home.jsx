import './Home.css'
// import { Layout, Carousel } from '../../components'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'

const Home = (props) => {
    
return (
    <Layout user={props.user}>
        <div className='home'>
            <Carousel />
        </div>
    </Layout>
)
}

export default Home