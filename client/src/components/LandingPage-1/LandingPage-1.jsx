
import './LandingPage-1.css'
import logo from "./implogo.png"; 

const LandingPage = () => {

    return (
        <div className="landing-page-div">
            <div className="landing-page">
                <h1 className="landing-page-title-1">welcome to the future</h1>
            </div>
            <hr className="ruler"/>
            <div className="landing-page-2">
            <div className="info-div-1">
                <section className="imporium-demo-box">
                <img className="imporium-demo-img" src={logo} alt="image not available"></img>
                </section>
                <article className="info-imporium">
                    <h1 className="what-is-imporium">What is Imporium?</h1>
                    <p className="imporium-paragraph">Imporium is the premier market place for NFTs. Our platform displays only the highest quality and rarest NFTs connecting buyers to quality sellers. The future is here. Add an NFT (or 10) to your assets today.</p>
                </article>
            </div>
            <div className="info-div-2">
                <section className="nft-demo-box">
                    <img className="nft-demo-img" src="https://lh3.googleusercontent.com/EaP8_SgqvhIRQDMCJ_wCIljJmxlnSyMdBWpow5oYcB6rJ-QYAogDwtjDGxEqWFeUFkAhJisRaWj8vv9jZ_VxnEHohCKvqarHel0dPw=w600" alt="image not available"></img>
                </section>
                <article className="info-nft">
                    <h1 className="what-is-nft">What is an NFT?</h1>
                    <p className="nft-paragraph">An NFT, non-fungible token, is a unique and non-interchangeable unit of data stored on a digital ledger. NFTs can be associated with easily-reproducible items such as photos, videos, audio, and other types of digital files as unique items, and use blockchain technology to give the NFT a public proof of ownership. Basically, you are granted ownership to a digital product that can be exchanged monetarily at anytime with anyone. No one can steal it from you.</p>
                </article>
                </div>

                </div>
            
            <hr className="ruler"/>
        </div>
    )
}

export default LandingPage