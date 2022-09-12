import { motion } from "framer-motion"
import {supabase} from "../../utils/supabase";

const StepFive = ({ nextStep, handleFormData, prevStep, values , user, setUser}) => {
  const submitFormData = async (e) => {
    //const { zipcode, applyingAs, orgName, address, size, prevApplied, teamOfWriters, grantAmount, whyTextArea } = values
    e.preventDefault()
    // const { data, error } = await supabase
    // .from('user_profile')
    // .insert([{ zipcode:zipcode, role: applyingAs, userID: user.id, amount: grantAmount }])
    nextStep()
  }

  return (
    <>
       <div initial={{ x: "20%" }} animate={{ x: "calc(100vw - 100%)" }} className="mainWrapper">
        <form
          onSubmit={submitFormData}
          style={{width: '35%'}}>   
          
          <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center" }}>
            
          <h3>5. How much is your annual budget?</h3>
            <div style={{width: '55%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
            <div><input 
                type="radio"
                value="Less than $50,000"
                name="grantAmount"  
                onChange={handleFormData("grantAmount")}    
              />
              <label htmlFor="grantAmount">Less than $50,000</label></div><br />
              <div><input 
                type="radio"
                value="$51,000 - $99,000"
                name="grantAmount"  
                onChange={handleFormData("grantAmount")} 
              />
              <label htmlFor="grantAmount">$51,000 - $99,000</label></div><br />   
              <div><input 
                type="radio"
                value="Greater than $100,000"
                name="grantAmount"  
                onChange={handleFormData("grantAmount")} 
              />
              <label htmlFor="grantAmount">Greater than $100,000</label></div><br />  

              <br />  
            </div>

            {/* <div className="leftBtnWrapper">
              <button className="leftBtnn" onClick={prevStep}>Prev</button>
            </div>
            <div className="rightBtnWrapper">
              <input className="rightBtn" type="submit" value="Next" /> 
            </div>  */}
          </div>
        </form>
      </div>
    </>
  )
}

export default StepFive