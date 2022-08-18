import {motion} from "framer-motion"

const Final = ({ values }) => {
 
  const { zipcode, applyingAs, orgName, address, size, prevApplied, teamOfWriters, grantAmount, whyTextArea } = values
  
  return (
    <>
      <motion.div initial={{ x: "20%" }} animate={{ x: "calc(100vw - 100%)" }} className="mainWrapper">
        <p>Zipcode: <strong>{zipcode}</strong></p>
        <p>Applying as: <strong>{applyingAs}</strong></p>
        <p>Organization name: <strong>{orgName}</strong></p>
        <p>Address: <strong>{address}</strong></p>
        <p>Size: <strong>{size}</strong></p>
        <p>Previously applied: <strong>{prevApplied}</strong></p>
        <p>Team of writers: <strong>{teamOfWriters}</strong></p>
        <p>Grant amount: <strong>{grantAmount}</strong></p>
      </motion.div>
    </>
  )
}

export default Final