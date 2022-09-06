import './NewFooter.styles.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"


const NewFooter = () => {
  return (
    <div className='footerWrapper'>
      <div>
        <Link className='resourcesBtn' style={{ marginRight: "35px" }} to="/resources">Resources</Link>
        <Link className='resourcesBtn' style={{ marginRight: "35px" }} to="/contact-us">Contact</Link>
      </div>

      <div>
        <Link to=""><FontAwesomeIcon style={{width: "25px", marginRight: "35px"}} icon={faLinkedinIn} size="2x" className="highlight" /></Link>
        <Link to=""><FontAwesomeIcon style={{width: "25px", marginRight: "35px"}} icon={faTwitter} size="2x" className="highlight" /></Link>
        <Link to=""><FontAwesomeIcon style={{width: "25px", marginRight: "35px"}} icon={faFacebook} size="2x" className="highlight" /></Link>
        <Link to=""><FontAwesomeIcon style={{width: "25px"}} icon={faInstagram} size="2x" className="highlight" /></Link>
      </div>
    </div>
  )
}

export default NewFooter