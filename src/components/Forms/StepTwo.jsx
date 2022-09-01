import { useState } from "react"
import { motion } from "framer-motion"

const StepTwo = ({ nextStep, handleFormData, prevStep, values, user, setUser }) => {

  const submitFormData = (e) => {
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
            
            <h3>2. Are you applying as</h3>
            <div style={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start'}}>
              
            <div></div>
              <div>
                <input 
                  type="radio"
                  value="Individual"
                  name="applyingAs"  
                  onChange={handleFormData("applyingAs")}    
                />
                <label htmlFor="applyingAs">An Individual</label>
              </div>

              <div>
                <input 
                  type="radio"
                  value="Organization"
                  name="applyingAs"  
                  onChange={handleFormData("applyingAs")}     
                />
                <label htmlFor="applyingAs">An Organization</label>
              </div>  

              <div>
                <input 
                  type="radio"
                  value="Government"
                  name="applyingAs"  
                  onChange={handleFormData("applyingAs")}     
                />
                <label htmlFor="applyingAs">A Government Agency</label>
              </div>
              
              <div>
                <input 
                  type="radio"
                  value="Education"
                  name="applyingAs"  
                  onChange={handleFormData("applyingAs")}     
                />
                <label htmlFor="applyingAs">An Educational Institution</label>
              </div>

              <br />    
              <br />

              {/* from here */}

              {values.applyingAs === 'Organization' && <div>
              <p><b>*</b> if you are from an organisation</p>
          
              <div style={{display: 'flex', flexDirection: "column"}}>
                <label style={{textAlign: 'start'}} htmlFor="orgName">Organization name:</label>
                <input
                  value={values.orgName}
                  onChange={handleFormData("orgName")}    
                  required
                  name="orgName"
                  type="text"
                />
              </div>
                  
              <div style={{display: 'flex', flexDirection: "column"}}>
                <label style={{textAlign: 'start', marginTop: '10px'}} htmlFor="address">Address:</label>
                <input
                  value={values.address}
                  onChange={handleFormData("address")}    
                  required
                  name="address"
                  type="text"
                />
              </div>

              <div style={{display: 'flex', flexDirection: "column"}}>
                <label style={{textAlign: 'start', marginTop: '10px'}} htmlFor="size">Size:</label>
                <input
                  // value={values.size}
                  onChange={handleFormData("size")}    
                  required
                  name="size"
                  type="number"
                />
                </div>
                </div>
              }
              {/* to here */}

            </div>
            {/* <div className="leftBtnWrapper">
              <button className="leftBtnn" onClick={prevStep}>Prev</button>
            </div>
            <div className="rightBtnWrapper">
              <input className="rightBtn" type="submit" value="Next" /> 
            </div> */}
          </div>
        </form>
      </div>
    </>
  )
}

export default StepTwo