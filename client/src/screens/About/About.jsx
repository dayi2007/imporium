import "./About.css"
import Linked from './LinkedIn.png'
import Git from './Github.png' 
import Layout from '../../components/Layout/Layout';

const About = (props) => {
  return (
  <Layout user={props.user}>
    <div className="main">
      <div className="cardbox1">
        <div className="developers">
          <h1>The future holds...</h1>
          <p className="about-devs">A lot of potential to bring this project to the next level. With a shared enthusiasm and passion for cryptocurrencies - alongside a deeply rooted obsession with the future advancements of society - our team wishes to build this site up to a fully functioning marketplace. This includes a user profile to track desired items to be purchased, display a user's personal collection of NFT's, and give users the ability to interact amongst each other. Beyond these features, with the anticipation of Web3.0, our vision is to see Imporium not only on a screen, but a virtual space to meet and interact with our users.</p>
        </div>
      </div>
      <div className="cardbox">
        <div className="dev" id="dev1">
          <h1 className="dev-name">Joseph Somuah</h1>
          <div className="img">
            <a href="https://github.com/supersaiyan245" target="_blank" rel="noreferrer" ><img className="img-about" src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/joseph-somuah-86821521a/" target="_blank" rel="noreferrer" ><img className="img-about" src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev2">
        <h1 className="dev-name">Andrew Hood</h1>
          <div className="img">
            <a href="https://github.com/abhood1418" target="_blank" rel="noreferrer" ><img className="img-about" src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/andrew-b-hood/" target="_blank" rel="noreferrer" ><img className="img-about" src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev3">
        <h1 className="dev-name">Dayanna Romero</h1>
          <div className="img">
            <a href="https://github.com/dayi2007" target="_blank" rel="noreferrer" ><img className="img-about" src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/dayanna-romero/" target="_blank" rel="noreferrer" ><img className="img-about" src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev4">
        <h1 className="dev-name">Johnny Domingo</h1>
          <div className="img">
            <a href="https://github.com/johnnydomingo" target="_blank" rel="noreferrer" ><img className="img-about" src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/johnny-domingo/" target="_blank" rel="noreferrer" ><img className="img-about" src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev5">
        <h1 className="dev-name">Andrew Lee</h1>
          <div className="img">
            <a href="https://github.com/andrewleenyk" target="_blank" rel="noreferrer" ><img className="img-about" src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/andrew-lee-ri/" target="_blank" rel="noreferrer" ><img className="img-about" src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    {/* </main> */}
    </div>
  </Layout>
  )
}

export default About