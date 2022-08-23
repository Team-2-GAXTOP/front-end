import { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import  {login}  from '../../utils/Auth'
import './LoginForm.css';
import googleIcon from './images/googleIcon.svg'

const Login = ({ user, setUser }) => {

  const [formDetail, setFormDetail] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { user, session, error } = await login (formDetail.email, formDetail.password);
    setUser(user);
    console.log("blah"+session.access_token);
    navigate("/profile-complete"); //Change later
  };

  return (
    <div className='loginWrapper'>
      <form className='formWrapper' onSubmit={handleSubmit}>
        <h3>Sign in</h3>
        <input id="signin-email" className="form-control" placeholder="Email or Phone number" type="email" value={formDetail.email}  onChange={handleChange}
          name="email" />
        <input id="signin-password" className="form-control" placeholder="Password" type="password"  value={formDetail.password}  onChange={handleChange}
          name="password" />
        
        {/* this should be a link */}
        <p className='forgotName'>Forgot password?</p>
        <button type="submit" id="signin-btn">Sign In</button>

        <br />
        <div className='lineDivider'></div>

        <p style={{marginBottom: "40px"}}>or</p>

        {/* this needs an on click event */}
        <div className='googleBtn'>
          <div>
            <img style={{ width: "20px", marginRight: "10px" }} src={googleIcon} alt='google button' />
          </div>
        
          <div>
            <p>Sign in with Google</p>
          </div>
        </div>

      </form>
      <div style={{display: "flex", flexDirection: "row"}}>
        <p className='forgotName'>Don't have an account?</p>
        <a style={{marginLeft: "10px", textDecoration: "none", fontWeight: "600", color: '#1960D3'}} className='forgotName' href="">Create one</a>
      </div>
      <br />
    </div>
  )
}

export default Login;