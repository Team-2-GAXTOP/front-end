import { motion } from "framer-motion"
import {supabase} from "../../utils/supabase";

const StepSix = ({ nextStep, handleFormData, prevStep, values , user, setUser}) => {
  const submitFormData = async (e) => {
    
    e.preventDefault()
    
    nextStep()
  }

  return (
    <>
       <div initial={{ x: "20%" }} animate={{ x: "calc(100vw - 100%)" }} className="mainWrapper">
        <form
          onSubmit={submitFormData}
          style={{width: '35%'}}>   
          
          <div style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: "center" }}>
            
          <h3>6. Why are you looking for the grant?</h3>
            <div style={{width: '45%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start' }}>
              
              <div>
                <input 
                  type="radio"
                  value="infrastructure"
                  name="grantSource"  
                  onChange={handleFormData("grantSource")}    
                />
                <label htmlFor="grantSource">To build infrastructure</label>
              </div><br/>

              <div>
                <input 
                  type="radio"
                  value="home"
                  name="grantSource"  
                  onChange={handleFormData("grantSource")} 
                />
                <label htmlFor="grantSource">Home installment</label>
              </div> <br/>
              
              <div>
                <input 
                  type="radio"
                  value="provider"
                  name="grantSource"  
                  onChange={handleFormData("grantSource")} 
                />
                <label htmlFor="grantSource">Pay for internet provider</label>
              </div><br/>

              <div>
                <input 
                  type="radio"
                  value="usage"
                  name="grantSource"  
                  onChange={handleFormData("grantSource")} 
                />
                <label htmlFor="grantSource">To drive usage</label>
              </div>
                
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

export default StepSix