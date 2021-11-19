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
          <h1>Meet the Devs</h1>
          <p className="about-devs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non efficitur justo, at hendrerit orci. Phasellus semper metus urna, at fringilla mauris faucibus ultricies. Sed ac augue sed enim pellentesque tincidunt. Mauris aliquam tortor odio, et viverra est lacinia non. Suspendisse sodales nulla dictum laoreet consequat.</p>
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