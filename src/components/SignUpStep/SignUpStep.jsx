import { useNavigate, Link } from 'react-router-dom'
import { googleAuth } from '../../utils/Auth'
import SignupForm  from '../SignupForm/SignupForm'
import GoogleLogin  from '../../components/GoogleLogin/GoogleLogin';
import './SignUpStep.css';
import { useState } from "react"

const SignUpStep = ({ values, user, setUser }) => {
  const navigate = useNavigate();
  const [isBusy, setBusy] = useState(true)

  const goToSignUp = () => {
    //navigate('/signup');
    setBusy(false)
  };

  return (
    <>
    { isBusy ?
    <>
    <div className='signup-main-div'>
      <h3 style={{marginBottom: "60px"}}>Please make an account to save your answers!</h3>
        <div className='signup-div'>
          <button type="button" id="signup-btn" onClick={goToSignUp}>Sign up for free</button>
        </div>
        <div className='signin-google-div'>
        <GoogleLogin values={values} user ={user} setUser={setUser} />
        </div>
        </div>
        </>
        :
        <SignupForm values={values} user ={user} setUser={setUser} />
    }
    </>
  )
}

export default SignUpStep;