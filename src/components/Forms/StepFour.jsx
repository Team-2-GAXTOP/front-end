import { motion } from "framer-motion"

const StepFour = ({  nextStep, handleFormData, prevStep, values, user, setUser }) => {
  
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
            
          <h3>4. Do you have a dedicated team of writers?</h3>
          <div>
            <input 
                type="radio"
                value="yes"
                name="teamOfWriters"  
                onChange={handleFormData("teamOfWriters")}    
              />
              <label htmlFor="teamOfWriters">Yes</label><br />
              <input 
                type="radio"
                value="no"
                name="teamOfWriters"  
                onChange={handleFormData("teamOfWriters")} 
              />
              <label htmlFor="teamOfWriters">No</label><br />    
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

export default StepFour