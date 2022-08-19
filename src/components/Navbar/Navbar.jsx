import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo';
import './Navbar.css';

import * as userService from '../../utils/users-service';

const Navbar = ({ user, setUser }) => {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <ul>
        <li><Logo /></li>
        <li id="resource-btn">
          <select>
            <option value="resources">Resources</option>
            <option value="others">others</option>
          </select>
        </li>
        <li><button type="button" id="login-btn">
          <Link to="" onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>LOG IN</Link>
        </button></li>
        {/* <li><button type="button" id="login-btn"><Link to="/login" style={{ textDecoration: 'none', color:'black', textAlign:'center', fontWeight:'bold'}}>Login</Link></button></li> */}
        </ul>
    </nav>
  )
}

export default Navbar