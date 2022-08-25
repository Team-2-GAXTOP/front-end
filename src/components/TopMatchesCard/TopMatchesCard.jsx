import './TopMatchesCard.styles.css'

const TopMatchesCard = ({ defaultStateCard, imageIcon, grantCardText }) => {
  return (
    
      <div className={!defaultStateCard ? "topMatchesCard" : "topMatchesCardDashed"}>

        {
          !defaultStateCard ? 
            <>
              <div className="topMatchesCardTop">
                <img className="placeholderImg" src="placeholderImg.png" alt="place holder image" />
            
                <div>
                  <h4 style={{marginBlockStart: "0"}}>Org name</h4>
                  <p>type of grant</p>
                </div>

              </div>

              <button className='btn viewBtn'>View</button>
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