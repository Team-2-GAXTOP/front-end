import './SearchOptions.css';
import { Link } from 'react-router-dom';

const SearchOptions = ({ user, setUser }) => {

    return (
      <>
      <div className='search-main-div'>
        <div className='header-div'>
          How would you like to find your grant?
        </div>
        <div className='btn-div'>
        <button type="button" id="searchManually-btn">Search Manually</button>
        or
        <button type="button" id="getMatched-btn">Get Matched</button>
        </div>
      </div>
      </>
    )
  }
  
  export default SearchOptions
  