import "./Layout.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import ParticlesEffect from "../Particles/Particles";
import '../Particles/Particles.css';

const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user} />
    <ParticlesEffect/>
    <div className="layout-children">{props.children}</div>
    
    <Footer />
  </div>
);

export default Layout;
