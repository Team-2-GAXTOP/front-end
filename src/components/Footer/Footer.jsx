import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';
import './Footer.css';
import * as userService from '../../utils/users-service';


const Footer = ({ user, setUser }) => {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <footer>
      <ul>
        <li><button type="button" id="resources-btn">
          <Link to="" onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>Resources</Link>
        </button></li>
        <li><button type="button" id="contact-btn">
          <Link to="" onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>Contact</Link>
        </button></li>
       
        <div id="social-icon">
            <a><SocialIcon url="https://twitter.com/generalassembly" /></a>
            <a><SocialIcon url="https://linkedin.com/school/generalassembly" /></a>
            <a><SocialIcon url="https://instagram.com/generalassembly" /></a>
            <a><SocialIcon url="https://facebook.com/generalassembly" /></a>
        </div>
        </ul>
    </footer>
  )
}

export default Footer