import './Home.css'
// import { Layout, Carousel } from '../../components'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import LandingPage from '../../components/LandingPage-1/LandingPage-1'
import LandingPageTwo from '../../components/LandingPage-2/LandingPage-2'
const Home = (props) => {
    
return (
    <div>
            <Layout >
            <div className="newhome">
                <div className='home'>
                    <Carousel />
                </div>
            </div>

        <LandingPage />

                <LandingPageTwo />
        </Layout>
    </div>



)
}

export default Home