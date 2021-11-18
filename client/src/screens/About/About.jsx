import "./About.css"
import Linked from './LinkedIn.png'
import Git from './Github.png' 

const About = (props) => {
  return (
    <main>
      <div className="cardbox">
        <div className="dev" id="dev1">
          <div className="img">
            <a href="https://github.com/supersaiyan245" target="_blank"><img src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/joseph-somuah-86821521a/" target="_blank"><img src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev2">
          <div className="img">
            <a href="https://github.com/abhood1418" target="_blank"><img src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/andrew-b-hood/" target="_blank"><img src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev3">
          <div className="img">
            <a href="https://github.com/dayi2007" target="_blank"><img src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/dayanna-romero/" target="_blank"><img src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev4">
          <div className="img">
            <a href="https://github.com/johnnydomingo" target="_blank"><img src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/johnny-domingo/" target="_blank"><img src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="dev" id="dev5">
          <div className="img">
            <a href="https://github.com/andrewleenyk" target="_blank"><img src={Git} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/andrew-lee-ri/" target="_blank"><img src={Linked} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About