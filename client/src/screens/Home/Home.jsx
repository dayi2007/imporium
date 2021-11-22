import './Home.css'
// import { Layout, Carousel } from '../../components'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/Carousel'
import LandingPage from '../../components/LandingPage-1/LandingPage-1'
import RevolveCarousel from '../../components/RevolveCarousel/RevolveCarousel'
const Home = (props) => {

    const bossbeauties = [
        "https://lh3.googleusercontent.com/JtfII1H5DN4DWzuorJkgPiCygog37ChCmUlI6V8tNzX9gx5X1-mfL1j-I_cvsoCukyx8r-V733eHMeOmAF_zIALMeAhffuyGI-PjvkM=w600", 
        "https://lh3.googleusercontent.com/liDC24zpyBsVQjGi0CVHb8e59Sc9F4ZbJlTyzKMjylghususGwZNdnzeG9Kw6XlZWSZ-y8R22iDh7nHvXmoBxb3lB531LfRNOWhRxw=w426",
        "https://lh3.googleusercontent.com/A1Xgy2tvlT3bXEpGC_s4DvZEBV3FSRBk_ktq-8DB96AhmS_LEFNaYqNUvfN26gNqAoZI9xbNsmYZ6B4O5Bf3zJD-Q_UAXNl77WR9cEg=w426",
        "https://lh3.googleusercontent.com/AN3XCMsHSxaLuyOizRwgOf--sYlcPYm77Of8sCY64PBJWiDcVsIZhMIbSXW7FMbxn6ymJT_7zr-xzLYJyqhDiOCqzqkWJ-xfZhZTBw=w426",
        "https://lh3.googleusercontent.com/2pa9MZ75C4QLGRvsTKpmODOMID2HntbS07K3lw8DLZ77al1mxwElR8TLv8N0D4-tQQhB6K1ujDL7JNt6E2FSXNK-sa3PFyiBNLXEVQA=w426",
        "https://lh3.googleusercontent.com/xINNHvjOXkDZy3vjY_GgBDah8S07HARB-LOPcNwZG7N0mba4IfT5WzxJxK-kXF_Rf7QLZqfhh_rgtadkbzf60-nMSohrSkNNsN-IOQ=w426", 
        "https://lh3.googleusercontent.com/xnZGF5avdlrX3wuYHTWXsdlgGQaTA2gEAXhYQdAliUfrAXMn9uRU5Nwbi6ujvuzhUmswE2s7Msy9fuhoDv_UB_Z0zK3_f1sVJyc7=w426",
        "https://lh3.googleusercontent.com/qIQj8p6baZ9kip5tU2dIdlwVKQIMwJWqKTnQlTu6DW61p3uQuRddEqaavgtWauByIH_bPRqmSwRxTekrRXXDjhJ4JHEXOSjQ90EMDw=w426"]
    const mandelbrot = [
        "https://lh3.googleusercontent.com/BQnz4MNzHCZAPqmR8xbwM76q6KS2XnbiQfQrX11gPRa3XoCdHHD6rMzUMOQvh4C8cb8L7ZRP1VcSDY9f8-ovlMYuzLIlaHnrng5176g=w281", 
        "https://lh3.googleusercontent.com/83nbG3U5wBye2pm9J3orXy2xSw918x6IFkc-xUK3Q5T1Dsk6AOEplggQmyFvxDxU4_56REzipcj9wtKxceJXRg-nz0zbHH-W2-k1UQ=w281",
        "https://lh3.googleusercontent.com/IzrMkqgRxF9dWcAzbgtzebp-TE-6v4z0GU-LTZia9kC3Y13BTPQTPVS-qlT_W4cxcSktGRGY3MmIsgLwvDtWIPKvJemgUUnShgAyGgU=w281",
        "https://lh3.googleusercontent.com/t8gTEpQldYNwreIDYosD-QCRpg1kkKx1iKfMdQMZtvpeKj4I68JkkzWasPryV96UUEZVJrDfD4mdQIJedJyDj9QZMqq0HASuAi2AYNA=w281",
        "https://lh3.googleusercontent.com/JCiKXM21dKFJFjjUkfsfSBkLPk2QQexMBSZYK-tYqWd5g_SP-yxVUQqFJmj1AuHbVx6Gr7aU3JDUlKCuLsi1zxTEaaUS4qzFnYgBOA=w281",
        "https://lh3.googleusercontent.com/jPGXBV_hCeqwHVAC7cCvGg8SXjvYzJ_7O3N21Aw1mQ7rgqDINbBk8guxCd0eHc6kaCqcuz9xRJxHZTmFVlAtiRqkoiru63DJ2vTAKg=w281", 
        "https://lh3.googleusercontent.com/Mp6w6TJw9Eh183TxGIrO1THYqCsQbfAmEb126Ib-A_DWAoYXJHeMaznTklxevf5bzvqn91jn79u85XKmTCb-VrC_l2D-H39Hpamhcg=w281",
        "https://lh3.googleusercontent.com/y4nEscY97dUgpTldwyJnBPUXPpp2qDddgcX9XJq5mJ3qXjg4SPtAWZ0YyfMPT0UVGZ72oItAE9xcyf-DMEK6xZ_XohFoB993iCcwdiQ=w281"]
    const coolcats = [
        "https://lh3.googleusercontent.com/NkATEcGDC2cmb5KYnreFgA7tf5XxNJotLdrfNfT0eFvLfxPqJshbTEybe1BLEII_8cw-FdMG2dlb6z6bMAB-IRV9cdANcOwtAmgX=w300", 
        "https://lh3.googleusercontent.com/Evf5RbtUi_N-LuJ8KLfOfby4egYphfqmud84ULtFpHL3eitVmWC6h9QZGyWu_i23hvKH9sib4kwkujHkPdlcgX8vG5XIG1FPyS2rw5g=w300",
        "https://lh3.googleusercontent.com/S1MklVSA5K10MgvkCt4aALxWG1Kr1ej4dWQVjK0aq_IDK4d1edg10DAS-YQdrNpucjxmBCEEfm-KI8uoV6sVIXzWTCKW3JMJP1JXDA=w300",
        "https://lh3.googleusercontent.com/bQqLIoPHDdOELMv6zCMQq0ZatlUmvvY_LDIN3-SA0WXqh07ru-yJlEMAIztf5tXHlAh9OwmrAjK3kiGVfQRGEUi9hKvAZIZN4ZaU7w=w300",
        "https://lh3.googleusercontent.com/kPxJjfY3FbXl1lGZIbP43ykzty7PeXkCUDfBGjQNAhHDSk3n3j4scv_BbiWm5W4PxGkNAKiqOlfwOs6suPw5qvFuMxAynYtbFegkjw=w300",
        "https://lh3.googleusercontent.com/uCoeYMmmi38kndaqXM38aS9vc_GK71l7P6ikV5A_xdnKHiAOMQUDW_K1INGz0Uc6jyTHDPgCbb-GNp76Lg5ZX6jBMAz88ifUnhpb5w=w300", 
        "https://lh3.googleusercontent.com/iTNGnNsfzooD4IgXeMcUpZx7RgvWXl7Q5DpKqxcf0EFtAaQ2FKpss48feJq6hZhK9fWqU3AEsei9G2CTM5psJcKBKRx9HDTh1fqt=w300",
        "https://lh3.googleusercontent.com/iTU0udQtxQ5k_s1zTy4CoIlFPWy0SKiu3Z9CJhoxbiluYPq7Mh_Kjxa7Q-0YY6cwiJ4YpJVCU0VHBSG37BvkDDQ28HYRXHcN0t4tdQ=w600"]
    const featured = ["https://lh3.googleusercontent.com/PZIlUphZOgmjDUHuXGQwnKBI0qswbFDB2Qtu6fiaZ_RA7Zy1wLtklyLFC9th3N-Ia9VbfWtycnp-MJ1a1lBH_420nm1b4N-DjrN__Q=w600",
        "https://lh3.googleusercontent.com/RDfZH1Vk-Sg_MLAHUDNKmOO7Ndq-cut9YN8RzYTz0WUXgUBg-1T8xrjminF2uKXpYvPZhHhGhElXpxRdVV5dtCbKRdYqd2RMVn-D=w600",
        "https://lh3.googleusercontent.com/O_Hsp-3kvKlDZOtPdWo5Qh6jxCSg9iMORjniQW9XUUaNOsblvzuQVFeBXMWFj2kGvwQnQOoXu83aCHMaqJVE437FS3QhOaJYef8xxQ=s992",
        "https://lh3.googleusercontent.com/FHzsbM-Bg1Fkzs7W5TdovhEzq-y3S5eE5lREjhGZqa6Lu7j3qBZk6xWTXIOYyXSj8PeBRkRmFnXwJMwAvU7t-X0224BLP8cU1UuM7C4=s992",
        "https://lh3.googleusercontent.com/vkJVHkQSDFu5-DdIqlzRBfVLfx84WKg5Y1Jx_kNoqHuYWYv3LJ9RZRRe56Oh3PQPBdkcenN1J-lVYySyqgrA6Y8bdcKbbHBoJ_OWiD0=w600",
        "https://lh3.googleusercontent.com/fOHAJuQk5iMyUEzWtdX-CS2dYeZRSfUP1v2B321J4RWRuOfZ9wIm416xMPEsiI0z3o07Kwckekh1IkJaiT0O-wkAOCOsjYdGL7dVwg=w600",
        "https://lh3.googleusercontent.com/W9Fba2FmdNnsCBTR5xC_cVg_lMX3bVEdw-9dnK3Gd9vA6QHBKdSKzHdaf4levHhNkuz_On-Pd4vrd5BYgvxCGUnO_x9hZuO50kOJYg=w600",
        "https://lh3.googleusercontent.com/mV5sntSbh9y--NZI-mOEF-6DmPyCXhISukJ8HsG44SRRqtx4rzk2x7H0xEXEekK2mbl1dJ90hl267TFeWIbVJAmlEO58UCC4kn4G=w600"
        ]
    
return (
    <div className="home-div">
        <Layout user={props.user}>

        <div className="main-carousel">
                <Carousel />
        </div>
            <div>
            <LandingPage />
            </div>

            <div className="feature-title">
                <h1 className="featured-artists">Featured Artists</h1>
            </div>
            <div className="revolving-carousels">
                <RevolveCarousel images={bossbeauties} collectionName={"Boss Beauties"}/>
                <RevolveCarousel images={coolcats} collectionName={"Cool Cats"}/>
                <RevolveCarousel images={mandelbrot} collectionName={"Mandelbrot"}/>
            </div>
            <div className="feature-title">
                <h1 className="featured-categories">Featured Categories</h1>
            </div>
            <div className="revolving-carousels">
                <RevolveCarousel images={featured} collectionName={"Featured"}/>
                <RevolveCarousel images={coolcats} collectionName={"Cool Cats"}/>
                <RevolveCarousel images={mandelbrot} collectionName={"Mandebrot"}/>
            </div>
        </Layout>
    </div>

)
}

export default Home