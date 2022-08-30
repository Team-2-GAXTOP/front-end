import OnboardingStepForm from "../OnboardingStepForm/OnboardingStepForm"
import { useState } from "react"


const OnboardingPage = ({ user, setUser }) => {


  // state for steps 
  const [step, setStep] = useState(1)

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setStep(step + 1)
  }

  // function for going to prev step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div className="wrapperPage">
      <OnboardingStepForm nextStep={nextStep} prevStep={prevStep} step={step}  user ={user} setUSer={setUser}  />
      {/* <div className="paginationOnboarding">
        <p>Question {step} of 5</p>
      </div> */}
    </div> 
  )
}

export default OnboardingPage