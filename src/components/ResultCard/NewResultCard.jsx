import DeadLine from "./images/deadline.svg"
import './NewResultCard.css'

const NewResultCard = ({ isBusy, dataR, user }) => {

  console.log(dataR)

  return (
    

    <div className="newresultcardWrapper">
      
      {isBusy ? (<p></p>) : (
        dataR.map(function (data, id) {
          <>
      <div className="newresultcardTop">

        <div className="newresultcardTopLeft">
                <h3 style={{ textAlign: 'left', marginBlockStart: 'unset', marginBlockEnd: 'unset' }}>{data.title}</h3>
                <p style={{ textAlign: 'left' }}>{(data.desc).substring(0, 250)+"..."}</p>
        </div>
        <div className="newresultcardTopRight">
          <button style={{marginBottom: "15px"}} className="btnResultsPage">View</button>
          <button className="btnResultsPage">Save</button>
        </div>

      </div>

      <div className="newresultcardBottom">
        
        <div className="newresultcardBottomLeft">
          <div className="newresultcardBottomLeftDeadline">
            <img className="deadlineImg" src={DeadLine} alt="deadline image" />
            <h3 className="deadlineWord" style={{marginBlockStart: 'unset', marginBlockEnd: 'unset'}}>Deadline:</h3>
                  <h3 className="dateForDeadline" style={{ marginBlockStart: 'unset', marginBlockEnd: 'unset' }}>{data.close_date}</h3>
          </div>
        </div>

        <div style={{display: "flex", alignItems: 'center'}}>
          <h3 className="statusWord" style={{ marginBlockStart: 'unset', marginBlockEnd: 'unset', marginRight: "10px" }}>Type:</h3>
          <h3 className="postedWord" style={{ marginBlockStart: 'unset', marginBlockEnd: 'unset'}}>{data.opp_type}</h3>
        </div>

      </div>
                    
          </>
                  }
          ))}
    </div>
  )
}

export default NewResultCard