import './TopMatchesCard.styles.css'
import { Link } from 'react-router-dom'
import { useState , useEffect} from "react"
import {supabase} from "../../utils/supabase";



const TopMatchesCard = ({  defaultStateCard, imageIcon, grantCardText, isBusy, data, user  }) => {
  const [isBusyHere, setBusyHere] = useState(true)
 

  return (
    
      <div className={!defaultStateCard ? "topMatchesCard" : "topMatchesCardDashed"}>

        {
          !defaultStateCard ? 
            <>
              <div className="topMatchesCardTop">
                <img className="placeholderImg" src="placeholderImg.png" alt="place holder image" />
            
                <div>
                  <h4 style={{marginBlockStart: "0"}}>{data.title}</h4>
                  <p className='postedWord'>{data.opp_type}</p>
                </div>

              </div>

              <Link to={`/grant-details/id=${data.id}`}><button className='btn viewBtn'>View</button></Link>
            </>
          :
          <>
            <div className='imageHolder'>
              <img className='passedInImage' src={imageIcon} />
            </div>
            <div className='centerCardText'>
              <p className='cardTextSize'>{grantCardText}</p>
            </div>
          </>
        }
      </div>

  )
}

export default TopMatchesCard