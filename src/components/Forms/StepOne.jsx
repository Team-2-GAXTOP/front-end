import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import './Form.styles.css'



const StepOne = ({ nextStep, handleFormData, values, user, setUser }) => {

  // const [error, setError] = useState(false)

  const options = ['All', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  const [selected, setSelected] = useState(options[0]);

  const submitFormData = (e) => {
    e.preventDefault()
    values.zipcode=selected
    handleFormData("zipcode") 
    nextStep()
  }

  return (
    <div className="mainWrapper">
      <form
        onSubmit={submitFormData}
        style={{ width: '35%' }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", position: "relative", bottom: "10px" }}>
          <h3>Which state are you in?</h3>
          <div>
            <select htmlFor="zipcode" 
              value={selected}
              name="zipcode"
              onChange={e => { setSelected(e.target.value); }}>
            
              {options.map((value) => (
                <option className="optionO" value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="rightBtnWrapper">
            <input className="rightBtn" type="submit" value="Next" />
          </div> */}
        </div>
      </form>
    </div>
  )
}

export default StepOne