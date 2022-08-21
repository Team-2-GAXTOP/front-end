import { motion } from "framer-motion"

const StepFive = ({ nextStep, handleFormData, prevStep, values }) => {

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
            
          <h3>5. What grant amount are you looking for?</h3>
            <div>
              <input 
                type="radio"
                value="$10,000"
                name="grantAmount"  
                onChange={handleFormData("grantAmount")}    
              />
              <label htmlFor="grantAmount">$10,000</label><br />
              <input 
                type="radio"
                value="$20,000"
                name="grantAmount"  
                onChange={handleFormData("grantAmount")} 
              />
              <label htmlFor="grantAmount">$20,000</label><br />   
              <input 
                type="radio"
                value="$30,000"
                name="grantAmount"  
                onChange={handleFormData("grantAmount")} 
              />
              <label htmlFor="grantAmount">$30,000</label><br />  

              <br />
              <p>Or enter amount</p>
              <div style={{display: 'flex', flexDirection: "column"}}>
                <label htmlFor="grantAmount" />
                <input
                  value={values.grantAmount}
                  onChange={handleFormData("grantAmount")}
                  name="grantAmount"
                  type="number"
                />
              </div>    
            </div>

            <div className="leftBtnWrapper">
              <button className="leftBtnn" onClick={prevStep}>Prev</button>
            </div>
            <div className="rightBtnWrapper">
              <input className="rightBtn" type="submit" value="Next" /> 
            </div> 
          </div>
        </form>
      </div>
    </>
  )
}

export default StepFive