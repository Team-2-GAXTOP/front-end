import './Account.styles.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import TopMatchesCard from '../../components/TopMatchesCard/TopMatchesCard'
import SavedGrants from './images/savedGrants.png'
import InProcess from './images/inProcess.png'
import AppliedGrants from './images/appliedGrants.png'


const Account = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/results");
  }

  console.log(user.user_metadata.first_name)
  return (
    <div className='accountWrapper'>
      <h3>Welcome, {user.user_metadata.first_name}!</h3>
      <div>
      <form onSubmit={handleSubmit}><button className='btn grantMatches'>View my grant matches</button></form>
      </div>
      <br />

      <div className='topMatchesSectionWrapper'>
        <h4>Top matches</h4>
        <div className="rowWrapper">
          <TopMatchesCard />
          <TopMatchesCard />
          <TopMatchesCard />
        </div>
      </div>

      <div className='savedGrantsSectionWrapper'>
        <h4>Saved Grants</h4>
        <p>0 grants</p>
        <div className='rowWrapper'>
          <TopMatchesCard defaultStateCard={true} imageIcon={SavedGrants} grantCardText="Your saved grants will appear here to apply whenever you’re ready!"/>
          
        </div>
      </div>

      <div className='savedGrantsSectionWrapper'>
        <h4>Applied Grants</h4>
        <p>0 grants</p>
        <div className='rowWrapper'>
          <TopMatchesCard defaultStateCard={true} imageIcon={AppliedGrants} grantCardText="Your applied grants will appear here!"/>
          
        </div>
      </div>

      <div className='savedGrantsSectionWrapper'>
        <h4>In Process</h4>
        <p>0 grants</p>
        <div className='rowWrapper'>
          <TopMatchesCard defaultStateCard={true} imageIcon={InProcess} grantCardText="Keep track of your applied grants !"/>
          
        </div>
      </div>

    </div>
  )
}

export default Account