// import './ProfileCompletePage.css';

import { useNavigate } from "react-router-dom";
import './ProfileCompletePage.style.css'

const ProfileCompletePage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/onboarding");
  }

  return (
    <div className="profileCompleteWrapper">
      <div className="profileCompleteWrapperInside">
        <div className='clap-image-div'>
          <img src={require("../../utils/images/hand.png")} alt=""></img>
        </div>
        <div className='text-div'>
          <p>PROFILE:  Complete!</p>
          <p>Congratulations your profile is 100% complete. </p>
        </div>
        <form onSubmit={handleSubmit}><button type="submit" id="signin-btn">Next</button></form>
      </div>
    </div>
  )
}

export default ProfileCompletePage
