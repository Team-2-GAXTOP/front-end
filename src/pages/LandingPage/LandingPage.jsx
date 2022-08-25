import './LandingPage.css';
import LandingMidCard from '../../components/LandingMidCard/landingMidCard';
import LandingBotCard from '../../components/LandingBotCard/landingBotCard';
import LandingTopCard from '../../components/LandingTopCard/landingTopCard';
// import { Link } from 'react-router-dom';

const LandingPage = ({ user, setUser }) => {

  return (
    <div className='landing-main-div'>
    <LandingTopCard/>
    <LandingMidCard/>
    <LandingBotCard/>
    </div>
  )
}

export default LandingPage
