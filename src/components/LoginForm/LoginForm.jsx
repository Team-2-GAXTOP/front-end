import { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import  {login}  from '../../utils/Auth'
import './LoginForm.css';

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
    navigate("/account");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input id="signin-email" className="form-control" placeholder="Email or Phone number" type="email" value={formDetail.email}  onChange={handleChange}
          name="email" />
          <input id="signin-password" className="form-control" placeholder="Password" type="password"  value={formDetail.password}  onChange={handleChange}
          name="password" />
          <label>Forgot password?</label>
          <button type="submit" id="signin-btn">SignIn</button>
      </form>
      <br />
    </>
  )
}

export default Login;