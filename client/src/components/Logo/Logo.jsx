import imp from './implogo.png'
import './Logo.css'

const Logo = () => {
    
    return(
        <div>
        {/* <img className="imp-logo" src={imp} /> */}
        <div class="scene">
            <div class="cube">
                <div class="face front"><img className="imp-logo" src={imp} /></div>
                <div class="face right"><img className="imp-logo" src={imp} /></div>
                <div class="face left"><img className="imp-logo" src={imp} /></div>
                <div class="face back"><img className="imp-logo" src={imp} /></div>
                <div class="face top"><img className="imp-logo" src={imp} /></div>
                <div class="face bottom"><img className="imp-logo" src={imp} /></div>
            </div>
</div>
     
        </div>
    )
} 
export default Logo