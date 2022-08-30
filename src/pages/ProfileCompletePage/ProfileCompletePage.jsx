
import { useNavigate } from "react-router-dom";
import './ProfileCompletePage.style.css'

const ProfileCompletePage = ({ user, setUser }) => {
  const navigate = useNavigate();
  console.log(user);
  setUser(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/login-back");
  }

  return (
    <div className="profileCompleteWrapper">
      <div className='clap-image-div'>
        <img src={require("../../utils/images/hand.png")} alt=""></img>
      </div>
      <div className='text-div'>
        <h3>PROFILE:  Complete!</h3>
        <h3>Congratulations your profile is 100% complete. </h3>
      </div>
      <div className="profileCompleteWrapperInside">
        <form onSubmit={handleSubmit}><button type="submit" id="matchesBtn">View your matches</button></form>
      </div>
    </div>
  )
}

export default ProfileCompletePage
