import { useState } from "react"
import StepOne from "../../components/Forms/StepOne"
import StepTwo from "../../components/Forms/StepTwo"
import Final from "../../components/Forms/Final"

import "./Onboarding.styles.css"
import StepThree from "../../components/Forms/StepThree"
import StepFour from "../../components/Forms/StepFour"
import StepFive from "../../components/Forms/StepFive"

const OnboardingStepForm = ({ nextStep, prevStep, step }) => {

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
        <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
      )
    case 2: 
      return (
        <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      )
    case 3: 
      return (
        <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      )
    case 4:
      return (
        <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      )
    case 5:
      return (
        <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} /> 
      )
    case 6:
      return (
        <Final values={formData}/> 
      )
    default: 
      return (
        <div></div>
      )
  }

}

export default OnboardingStepForm