
import GoogleLogin  from '../../components/GoogleLogin/GoogleLogin';
import Auth from '../../utils/Auth'
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

const AuthPage = ({ user, setUser }) => {
  let navigate = useNavigate();
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <>
     
      <div className='login-main-div'>
        <div className='signup-div'>
          <button type="button" id="signup-btn" onClick={goToSignUp}>Sign up for free</button>
        </div>
        <div className='signin-google-div'>
        <GoogleLogin />
        </div>
      </div>
      <footer>
      </footer>
    </>
  )
}

export default AuthPage
