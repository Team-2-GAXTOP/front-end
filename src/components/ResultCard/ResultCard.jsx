import "./ResultCard.css";
import { Link } from 'react-router-dom';

export default function ResultCard({ isBusy, dataR, user }) {
    
    return (
        <>
        <div className='main-result-div'>
            {isBusy ? (<p></p>) : (
                dataR.map(function (d, id) {
                    return ( 
                        <>
                        <div className='result-left-div'>
                            <div className='title-div'>
                                {d.opportunityTitle}
                            </div>
                             <div className='description-div'>
                              {(d.description).substring(0, 250)+"..."}
                             </div>
                            
                        </div>
                        <div className='result-right-div'>
                            <div id='status-div'>
                                <p>Status:</p>
                            </div>
                            <div id='date-div'>
                                <p>Close Date:</p>
                            </div>
                        </div>
                        <div className="viewWrapper">
                                <input className="viewBtn" type="submit" value="View" /> 
                            </div> 
                        </>
                    )
                })
            )}
        </div>
        </>
    );
}