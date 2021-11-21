import "./About.css"
import Linked from './LinkedIn.png'
import Git from './Github.png' 
import Layout from '../../components/Layout/Layout';

const About = (props) => {
  return (
  <Layout user={props.user}>
      <h1 className="devs">Meet the Devs</h1>
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
  </Layout>
  )
}

export default About