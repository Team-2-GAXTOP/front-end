import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo';
import './Navbar.css';

import * as userService from '../../utils/users-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ user, setUser }) => {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className="m-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-static-top">
        <div className="container-fluid">
          <Logo />
          {user ?
            <div>
              <FontAwesomeIcon icon={faUserCircle} size="2x" className="highlight" />
              <FontAwesomeIcon icon={faBell} size="2x" className="highlight" />
            </div>
            :
            <></>
          }

          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              {/* <button className="nav-item" id="resource-btn" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                <li style={{ listStyleType: 'none', textAlign: 'center', fontWeight: 'bold' }}>
                  <select >
                    <option value="resources">Resources</option>
                    <option value="others">others</option>
                  </select>
                </li>
              </button> */}
            </div>

            <div className="navbar-nav ms-auto">
              {!user ?
                <button className="nav-item" type="button" id="login-btn"><Link to="/login" style={{ textDecoration: 'none', color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Login</Link></button>
                :
                <button className="nav-item" type="button" id="logout-btn">
                  <Link to="" onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>Log Out</Link>
                </button>
              }
            </div>
            <FontAwesomeIcon icon={faSearch} size="2x" className="highlight" />

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar