const Chartdiv = ({ userData }) => {
  console.log(userData)
  
  const handleClicky = (e) => {
    console.log(e)
  }

  return (
    <div onClick={(e) => handleClicky(e)} style={{ width: "1000px", height: "450px" }} id="chartdiv">

    </div>
  )
}

export default Chartdiv