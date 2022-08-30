import { useState } from "react"
import StepOne from "../../components/Forms/StepOne"
import StepTwo from "../../components/Forms/StepTwo"
import SignUpStep from "../../components/SignUpStep/SignUpStep"
import GoogleLogin  from '../../components/GoogleLogin/GoogleLogin';
import { useNavigate } from "react-router-dom";
import "./Onboarding.styles.css"
import StepThree from "../../components/Forms/StepThree"
import StepFour from "../../components/Forms/StepFour"
import StepFive from "../../components/Forms/StepFive"
import StepSix from "../../components/Forms/StepSix";

const OnboardingStepForm = ({ nextStep, prevStep, step , user, setUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    zipcode: '',
    applyingAs: '',
    orgName: '',
    address: '',
    size: '',
    prevApplied: '',
    teamOfWriters: '',
    grantAmount: "",
    whyTextArea: ''
  }) 

    const goToSignUp = () => {
      navigate('/signup');
    };

  // handling form input data by taking onchange value and updating our prev form data state
  const handleInputData = (input) => e => {
    // input value from the form 
    const { value } = e.target

    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }))
  }

  

  // switch case to show different form in each step 
  switch (step) {
    case 1:
      return (
        <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} user ={user} setUSer={setUser} />
      )
    case 2: 
      return (
        <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} user ={user} setUSer={setUser} />
      )
    case 3: 
      return (
        <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} user ={user} setUSer={setUser} />
      )
    case 4:
      return (
        <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} user ={user} setUSer={setUser} />
      )
    case 5:
      return (
        <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} user ={user} setUSer={setUser} /> 
      )
    case 6:
      return (
        <StepSix nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} user ={user} setUSer={setUser} /> 
      )
    case 7:
      return (
        // <Final values={formData} user ={user} setUSer={setUser} /> 
         
        <SignUpStep values={formData} user ={user} setUSer={setUser} />
      )
    default: 
      return (
        <div></div>
      )
  }

}

export default OnboardingStepForm