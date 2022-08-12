// import './ProfileCompletePage.css';
import  {getSession}  from '../../utils/Auth'

const ProfileCompletePage = ({ user, setUser }) => {


  const getUserDetail = async (e) => {
    e.preventDefault();
     console.log(getSession);
  }


  return (
    <>
      <div className='clap-image-div'>
        <img src={require("../../utils/images/hand.png")}></img>
      </div>
      <div className='text-div'>
        <p>PROFILE:  Complete!</p>
        <p>Congratulations your profile is 100% complete. </p>
      </div>
      <form onSubmit={getUserDetail}><button type="submit" id="signin-btn" onClick={getUserDetail}>SignIn</button></form>
    </>
  )
}

export default ProfileCompletePage
