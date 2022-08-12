import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupForm.css";
import  {signup}  from '../../utils/Auth'

const SignupForm = ({  user, setUser }) => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const { firstName, lastName, email, password, passwordConf } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != passwordConf) {
      return;
    }
    let { user, session, error } = await signup(firstName,lastName, email, password);
    setUser(user);

    if (signup.error) {
      console.log(signup.error.message);
    } else {
      navigate("/profile-complete");
    }
  };

  const isFormInvalid = () => {
    return !(firstName && firstName && email && password && password === passwordConf);
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="sign-up-form-container"
    >
      <div className="sign-up-input-container">
        <label>*First Name:</label>
        <input
          required
          type="text"
          autoComplete="off"
          id="first-name"
          value={firstName}
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          className="form-control"
        />
      </div>
      <div className="sign-up-input-container">
        <label>*Last Name:</label>
        <input
          required
          type="text"
          autoComplete="off"
          id="last-name"
          value={lastName}
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name"
          className="form-control"
        />
      </div>
      <div className="sign-up-input-container">
        <label>*Email Address</label>
        <input
          required
          type="email"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
          className="form-control"
        />
      </div>
      <div className="sign-up-input-container">
        <label>Phone Number</label>
        <input
          type="text"
          autoComplete="off"
          id="phone"
          name="phone"
          onChange={handleChange}
          placeholder="Phone"
          className="form-control"
        />
      </div>
      <div className="sign-up-input-container">
        <label>*Password</label>
        <input
          required
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          className="form-control"
        />
      </div>
      <div className="sign-up-input-container">
      <label>*Confirm Password</label>
        <input
          required
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          placeholder="Confirm Password"
          className="form-control"
        />
      </div>
      <div className="sign-up-button-container">
        <input
          type="submit"
          className="sign-up-button"
          value="Create account"
        />
      </div>
    </form>
  );
};

export default SignupForm;
