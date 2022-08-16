import { useState } from "react"
import "./Onboarding.styles.css"

// zipcode
// whoAreYou
// orgName
// address 
// size
// prevApplied
// writersTeam
// grantAmount 
// why

const Onboarding = () => {
  const defaultFormFields = {
    zipcode: '',
    applyingAs: '',
    orgName: '',
    address: '',
    size: '',
    prevApplied: '',
    teamOfWriters: '',
    grantAmount: "",
    whyTextArea: ''
  }

  const [form, setForm] = useState(defaultFormFields)

  const {
    zipcode,
    applyingAs,
    orgName,
    address,
    size,
    prevApplied,
    teamOfWriters,
    grantAmount,
    whyTextArea
  } = form 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]: value})
  }


  const NextButtons = () => {
    return (
      <div className="nextBtnsDiv">
        <div className="leftBtn"> <img src="/arrowLeft.png" alt="" /></div>
        <div className="rightBtn"> <img src="/arrowRight.png" alt="" /></div>
      </div>
    )
  }

  const Pagination = ({qNum}) => {
    return (
      <div className="paginationOnboarding">
        <p>Question {qNum} of 6</p>
      </div>
    )
  }

  // form fields
  const ZipcodeInfo = () => {
      return (
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <h3>1. What is your zipcode?</h3>
          <div style={{ paddingLeft: "20px"}}>
            <label htmlFor="zipcode" />
            <input
              value={zipcode}
              onChange={handleChange}
              placeholder="90001"
              required
              name="zipcode"
              type="number"
            />
          </div>
        </div>
  )
  }
  

  return (
    <>
      <div className="mainWrapper">
      <h4>Please fill in the information</h4>

        <form
          onSubmit={handleSubmit}
          style={{width: '35%'}}
      >
        <ZipcodeInfo />
        
        {/* second component */}
        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: 'column', alignItems: "flex-start" }}>
        <h3>2. Are you applying as</h3>
        <div>
          <input 
            type="radio"
            value="Individual"
            name="applyingAs"  
            onChange={handleChange}    
          />
          <label htmlFor="applyingAs">Individual</label><br />
          <input 
            type="radio"
            value="Organization"
                name="applyingAs"  
                onChange={handleChange} 
          />
          <label htmlFor="applyingAs">Organization</label><br />
          <input 
            type="radio"
            value="Government Agency"
                name="applyingAs"  
                onChange={handleChange} 
          />
          <label htmlFor="applyingAs">Government Agency</label><br />
              
          <br />
          <p><b>*</b> if you are from an organisation</p>
      
          <div style={{display: 'flex', flexDirection: "column"}}>
            <label htmlFor="orgName">Organization name:</label>
            <input
              value={orgName}
              onChange={handleChange}
              required
              name="orgName"
              type="text"
            />
          </div>
              
          <div style={{display: 'flex', flexDirection: "column"}}>
            <label htmlFor="address">Address:</label>
            <input
              value={address}
              onChange={handleChange}
              required
              name="address"
              type="text"
            />
          </div>

          <div style={{display: 'flex', flexDirection: "column"}}>
            <label htmlFor="size">Size:</label>
            <input
              value={size}
              onChange={handleChange}
              required
              name="size"
              type="number"
            />
          </div>    

              

          </div>
        </div>
          
        {/* Third component */}
        <h3>3. Have you previously applied for a grant?</h3>
        <div>
          <input 
              type="radio"
              value="yes"
              name="prevApplied"  
              onChange={handleChange}    
            />
            <label htmlFor="prevApplied">Yes</label><br />
            <input 
              type="radio"
              value="no"
              name="prevApplied"  
              onChange={handleChange} 
            />
            <label htmlFor="prevApplied">No</label><br />    
          </div>

        {/* Fourth component */}
        <h3>4. Do you have a dedicated team of writers?</h3>
        <div>
          <input 
              type="radio"
              value="yes"
              name="teamOfWriters"  
              onChange={handleChange}    
            />
            <label htmlFor="teamOfWriters">Yes</label><br />
            <input 
              type="radio"
              value="no"
              name="teamOfWriters"  
              onChange={handleChange} 
            />
            <label htmlFor="teamOfWriters">No</label><br />    
          </div>
          
        {/* Fifth component */}
        <h3>5. What grant amount are you looking for?</h3>
        <div>
          <input 
            type="radio"
            value="$10,000"
            name="grantAmount"  
            onChange={handleChange}    
          />
          <label htmlFor="grantAmount">$10,000</label><br />
          <input 
            type="radio"
            value="$20,000"
            name="grantAmount"  
            onChange={handleChange} 
          />
          <label htmlFor="grantAmount">$20,000</label><br />   
          <input 
            type="radio"
            value="$30,000"
            name="grantAmount"  
            onChange={handleChange} 
          />
          <label htmlFor="grantAmount">$30,000</label><br />  

          <br />
          <p>Or enter amount</p>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <label htmlFor="grantAmount" />
            <input
              value={grantAmount}
              onChange={handleChange}
              required
              name="grantAmount"
              type="number"
            />
          </div>    
          
          </div>
          
        {/* Sixth component */}
        <h3>6. Why are you looking for the grant? (for example: to build infrastructure, home installments, pay for internet provide)</h3>
        <div>
          <label htmlFor="whyTextArea"></label><br />    
          <textarea
            name="whyTextArea"
            value={whyTextArea}
            onChange={handleChange}
          ></textarea>      
        </div>

        <input
          type="submit"
          value="Submit"
          style={{width: '40%', marginTop: '40px'}}
          />
          

        </form>
        {/* <Pagination qNum={1} />
        <NextButtons /> */}
      </div>
    </>
  )
}

export default Onboarding