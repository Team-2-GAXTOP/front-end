import OnboardingStepForm from "../OnboardingStepForm/OnboardingStepForm"
import { useState } from "react"
import './OnboardingPage.css'

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
    <div className="wrapperPager">
      <OnboardingStepForm nextStep={nextStep} prevStep={prevStep} step={step} user={user} setUSer={setUser} />
      
      {/* place buttons here */}
      {step === 7 || step <= 0 ? '' :
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '60%' }}>
          <button className={step <= 1 ? 'leftBtnnHide' : 'leftBtnn'} onClick={prevStep}>Prev</button>
  
          <p className="paginationQ" style={{ marginBlockStart: '0', marginBlockEnd: '0' }}>Question {step} of 6</p>
      
          
          {step === 6 ? <button className="rightBtn" onClick={nextStep}>Submit</button> : <button className="rightBtn" onClick={nextStep}>Next</button>}
          
        
        </div>
      }
    </div> 
  )
}

export default OnboardingPage