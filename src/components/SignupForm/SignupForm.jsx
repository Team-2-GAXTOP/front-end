import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css";
import {supabase} from "../../utils/supabase";
import  {signup}  from '../../utils/Auth'
import { getUser } from '../../utils/users-service';

const SignupForm = ({  handleFormData, values, user1, setUser1 }) => {

  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  const { zipcode, applyingAs, orgName, address, size, prevApplied, teamOfWriters, grantAmount, whyTextArea } = values
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
    if (password !== passwordConf) {
      return;
    }
    let { user, session, error } = await signup(firstName,lastName, email, password);
    setUser(user);

    if (signup.error) {
      console.log(signup.error.message);
    } else {
      const { data, error } = await supabase
      .from('user_profile')
      .insert([{ zipcode:zipcode, role: applyingAs, userID: user.id, amount: grantAmount }])
      navigate("/profile-complete");
    }
  };
  
  return (
    <div className="signupWrapper">
    
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      
      >
      <div className="sign-up-form-container">
      <div className="sign-up-input-container">
        <div className="nameHolder"> <label>*First Name:</label> </div>
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
        <div className="nameHolder"> <label>*Last Name:</label> </div>
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
        <div className="nameHolder"> <label>*Email Address</label> </div>
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
        <div className="nameHolder"> <label>Phone Number</label> </div>
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
        <div className="nameHolder"> <label>*Password (6 characters long)</label> </div>
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
        <div className="nameHolder"> <label>*Confirm Password (6 characters long)</label> </div>
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
      </div>    
      <div style={{marginTop: "20px"}} className="sign-up-button-container">
        <input
          type="submit"
          className="sign-up-button"
          value="Create account"
        />
      </div>
      </form>
    </div>
  );
};

export default SignupForm;
