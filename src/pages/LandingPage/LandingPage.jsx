import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = ({ user, setUser }) => {

  return (
    <>
    
    <div className='landing-main-div'>
      <div className='text-div'>
        We make finding grants easy!
      </div>
      <button type="button" id="clickToKnow-btn"> <Link style={{ textDecoration: 'none', color:'black', textAlign:'center'}} to={"/sign-up-free"}> Click here to know more!</Link></button>
    </div>
    </>
  )
}

export default LandingPage
