import "./landingMidCard.css"

const LandingMidCard = () => {

return (    

    <div className='mid-card'>
      <div className='mid-card-wrapper'>
      <h1 className="mid-h1">
        What InteGrant Can Do For You
      </h1>
      <div className='mid-cards'>
        <h2 className='mid-card-h2'>01 Streamlined Searching</h2>
        Find the right grants for your needs by using our Grant Matching Quiz or the search buttons above to filter according to your needs.
        </div>
        <div className='mid-cards'>
        <h2 className='mid-card-h2'>02 Save Matches & Get Notified</h2>
        Save the grants you want to apply for and keep track of the deadlines. Get notified about new grants by switching the toggle on for notifications on the results page.
        </div>
        <div className='mid-cards'>
        <h2 className='mid-card-h2'>03 Find Resources</h2>
        On clicking on a grant for more information, you can view available resources pertaining to that grant: such as helpful articles, blogs, informational videos, and webinars or events to learn more about the grant.
        </div>
      </div>
    </div>

)

};

export default LandingMidCard