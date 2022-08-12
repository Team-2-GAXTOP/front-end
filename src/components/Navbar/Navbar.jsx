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
    <nav style={{ marginLeft: '50%', width: '50%', display: 'grid', justifyContent: 'space-around', gridTemplateColumns: '1fr 1fr 1fr' }}>
       <Logo />
        <button type="button" id="login-btn"><Link to="/login" style={{ textDecoration: 'none', color:'black', textAlign:'center', fontWeight:'bold'}}>Login</Link></button>
         <button type="button" id="logout-btn">
          <Link to="" onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>Log Out</Link>
        </button>
    </nav>
  )
}

export default Navbar