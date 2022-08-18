import { motion } from "framer-motion"
import './Form.styles.css'

const StepOne = ({ nextStep, handleFormData, values }) => {

  // const [error, setError] = useState(false)

  const submitFormData = (e) => {
    e.preventDefault()

    nextStep()
  }

  return (
    <div initial={{ x: "20%" }} animate={{ x: "calc(100vw - 100%)" }} className="mainWrapper">
      <form
        onSubmit={submitFormData}
        style={{width: '35%'}}
  >

      {/* first component */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", position: "relative" }}>
        <h3>What is your zipcode?</h3>
        <div>
          <label htmlFor="zipcode" />
          <input
            value={values.zipcode}
            onChange={handleFormData("zipcode")}
            placeholder="90001"
            required
            name="zipcode"
            type="number"
          />
        </div>
        <div className="rightBtnWrapper">
          <input className="rightBtn" type="submit" value="Next" /> 
        </div>
      </div>
    </form>
  </div>
  )
}

export default StepOne