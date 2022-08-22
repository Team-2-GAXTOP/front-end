import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import './Footer.css';


const Footer = ({ user, setUser }) => {

  return (
    <footer className=" bg-primary">
      <div className='main-div-footer'>
        <div>
          <button type="button" id="resource-btn"><Link to="/resource" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Resources</Link></button>
        </div><div>
          <button type="button" id="contact-btn">
            <Link to="/contact" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Contact</Link>
          </button>
        </div>

        <div>
          <a href="https://linkedin.com/school/generalassembly"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="highlight" /></a>
          <a href="https://twitter.com/generalassembly"><FontAwesomeIcon icon={faTwitter} size="2x" className="highlight" /></a>
          <a href="https://facebook.com/generalassembly" target={"_blank"}><FontAwesomeIcon icon={faFacebook} size="2x" className="highlight" /></a>
          <a href="https://instagram.com/generalassembly"><FontAwesomeIcon icon={faInstagram} size="2x" className="highlight" /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer