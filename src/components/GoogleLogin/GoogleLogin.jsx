import { useNavigate, Link } from 'react-router-dom'
import { googleAuth } from '../../utils/Auth'

const GoogleLogin = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    googleAuth();
  };

  return (
    <>
      <button type="button" id="signup-btn" onClick={handleSubmit}><img src={require('../../utils/images/google-icon.jpg')} id='google-img' />Sign in with Google</button>
    </>
  )
}

export default GoogleLogin;