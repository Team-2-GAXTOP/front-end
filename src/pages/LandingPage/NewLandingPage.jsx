import './NewLandingPage.styles.css'
import LandingPageImg from './images/landingPageImg.svg'
import { Link } from 'react-router-dom'
import LandingBotCard from '../../components/LandingBotCard/landingBotCard'

const NewLandingPage = () => {
  return (
    <div className='landingPageWrapper'>
      <section className='sectionOne'>
        <div className='sectionOneWrapper'>
          
          <div className='sectionOneLeftSide'>
            
            <h1 className='homeTitle'>We make finding grants easy!</h1>
            <h3 className='homeSecondary'>Find your next broadband grants here</h3>
            <Link className='buttonHome' to={"/onboarding"}>Take Grant Match Quiz</Link>

          </div>

          <div className='sectionOneRightSide'>
            <img className='LandingPageImg' src={LandingPageImg} alt="Landing page image" />
            <div className='sectionOneRightSideBackground'></div>
          </div>


        </div>
      </section>

      <section className='sectionTwo'>
        <div className='homeDivider'></div>

        <div className='homeSectionTwoMid'>
          <h1 style={{marginBottom: "60px"}} className='homeTitle'>What Integrant can do for you</h1>

          <div className='sectionTwoWhat'>

            <div className='sectionTwoWhatOne sectionTwoWhatBox'>
              <h2>01</h2>
              <div>
                <h2>Streamlined Searching</h2>
                <p>Find the right grants for your needs by using our Grant Matching Quiz or the search buttons above to filter according to your needs.</p>
              </div>
            </div>

            <div className='sectionTwoWhatTwo sectionTwoWhatBox'>
              <h2>02</h2>
              <div>
                <h2>Save Matches & Get Notified</h2>
                <p>Save the grants you want to apply for and keep track of the deadlines. Get notified about new grants by switching the toggle on for notifications on the results page.</p>
              </div>
            </div>

            <div className='sectionTwoWhatThree sectionTwoWhatBox'>
              <h2>03</h2>
              <div>
                <h2>Find Resources</h2>
                <p>On clicking on a grant for more information, you can view available resources pertaining to that grant: such as helpful articles, blogs, informational videos, and webinars or events to learn more about the grant.</p>
              </div>
            </div>

          </div>

        </div>

        <div className='homeDivider'></div>
      </section>

      <section className='sectionThree'>
        <LandingBotCard />
      </section>
    </div>
  )
}

export default NewLandingPage