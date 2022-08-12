import './Logo.css';
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <button type="button" id="logo-btn"><Link to="/" style={{ textDecoration: 'none', color:'black', textAlign:'center', fontWeight:'bold'}}>LOGO</Link></button>
  )
}

export default Logo