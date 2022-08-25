import './landingTopCard.css'
import Broadband from "../img/broadband.png"
import { Link } from 'react-router-dom';

const LandingTopCard = () => {

return (
<div className='top-card'>
    <div className='top-card-wrapper'>
    <div className='top-card-left'>
        <h1 className='top-htag'> We make finding grants easy! </h1>
        <h2 className='top-htag'> Find your next broadband grants here </h2>
      <button type="button" id="grant-quiz-btn"><Link style={{ textDecoration: 'none', color:'white', textAlign:'center', }} to={"/onboarding"}> Take Grant Match Quiz </Link></button>
        </div>
    </div>
        <div className='top-card-right'>
            <div className='top-img-bg'>
            <img 
          src={Broadband}
          alt=''
          className='top-broadband'
          />
            </div>
        </div>
</div>

)

}

export default LandingTopCard