import './LandingPage-2.css'

const LandingPageTwo = (props) => {

    return (
        <div className="landing-page-two">
                        <h2 id="featuring-title">{props.collectionName}</h2>
            <div className="scope-container">

                <div className="scope">
                    <span id="style1" styles={"--i:1;"}><img id="img-rotate" src={props.images[0]} alt="not found"/></span>
                    <span id="style2" styles={"--i:2;"}><img id="img-rotate" src={props.images[1]} alt="not found"/></span>
                    <span id="style3" styles={"--i:3;"}><img id="img-rotate" src={props.images[2]} alt="not found"/></span>
                    <span id="style4" styles={"--i:4;"}><img id="img-rotate" src={props.images[3]} alt="not found"/></span>
                    <span id="style5" styles={"--i:5;"}><img id="img-rotate" src={props.images[4]} alt="not found"/></span>
                    <span id="style6" styles={"--i:6;"}><img id="img-rotate" src={props.images[5]} alt="not found"/></span>
                    <span id="style7" styles={"--i:7;"}><img id="img-rotate" src={props.images[6]} alt="not found"/></span>
                    <span id="style8" styles={"--i:8;"}><img id="img-rotate" src={props.images[7]} alt="not found"/></span>
                </div>
            </div>
        </div>
    )
}

export default LandingPageTwo