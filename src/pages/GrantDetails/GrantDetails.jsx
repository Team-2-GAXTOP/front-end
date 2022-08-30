import { Link } from 'react-router-dom'
import './GrantDetails.styles.css'
import GoBackArrow from './images/goBackArrow.svg'
import { useState } from 'react'


const GrantDetails = () => {

  const [activeTab, setActiveTab] = useState('Overview')
 
  const handleTabChange = (e) => {
    setActiveTab(e.target.innerText)
  }

  const Overview = () => {
    return (
      <>
        General Info
      </>
    )
  }

  const WhoCanApply = () => {
    return (
      <>
        Who can apply
      </>
    )
  }

  const Timeline = () => {
    return (
      <>
        Timeline
      </>
    )
  }

  const Resources = () => {
    return (
      <>
        Resources
      </>
    )
  }

  // yo

  return (
    <div className="grantDetailsWrapper">
      <div className='grantDetailsContainer'>
        <div style={{marginBottom: "80px"}} className='grantDetailsBackToBrowse'>
          <img style={{marginRight: "6px", width: "20px"}} src={GoBackArrow} alt="Go back arrow" />Back to browse
        </div>

        <div className='grantBoxButtonHolder'>
          <div className='grantDetailsBox'>
            <h3 style={{marginBlockStart: "0", marginBlockEnd: "0", textAlign: "start"}}>Broadband Equity, Access, and Deployment Program</h3>
            <div style={{marginTop: "10px"}} className='grantDetailsBoxApplicationStatus'>
              <div style={{marginRight: "10px"}} className='applicationStatus' />
              <p style={{marginBlockStart: "0", marginBlockEnd: "0"}}>Application: Open</p>
            </div>
            <div className='grantDetailsBoxDeadline'>
              <p style={{marginBlockStart: "0", marginBlockEnd: "0"}}>Deadline: Nov 2, 2023</p>
            </div>
          </div>

          <div className='grantButtons'>
            <button className='grantBtn'>Apply</button>
            <button className='grantBtn'>Save</button>
            <button className='grantBtn'>Send</button>
          </div>
        </div>

        <div className="grantDetailsActualData">
          <div className='grantDetailsActualDataTop'>
            
            <div className={activeTab === 'Overview' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
              Overview
            </div>

            <div className={activeTab === 'Who can Apply' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
              Who can Apply
            </div>

            <div className={activeTab === 'Timeline' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
              Timeline
            </div>

            <div className={activeTab === 'Resources' ? 'grantTabsOther' : 'grantTabs'} onClick={handleTabChange}>
              Resources
            </div>
          </div>

          <div className='grantDetailsActualDataBody'>
            {activeTab === 'Overview' && <Overview />}
            {activeTab === 'Who can Apply' && <WhoCanApply />}
            {activeTab === 'Timeline' && <Timeline />}
            {activeTab === 'Resources' && <Resources />}
          </div>
        </div>

      </div>

    </div>
  )
}

export default GrantDetails