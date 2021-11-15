import './Home.css'
import { Layout, Carousel } from '../../components'

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