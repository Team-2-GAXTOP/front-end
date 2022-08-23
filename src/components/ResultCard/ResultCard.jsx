
import { Link } from 'react-router-dom';

export default function ResultCard({ isBusy, dataR, user }) {
    
    return (
        <>
        <div className='main-result-div'>
            {isBusy ? (<p></p>) : (
                dataR.map(function (d, id) {
                    return ( 
                        <>
                            <div className='title-div'>
                                {d.opportunityTitle}
                            </div>
                             <div className='description-div'>
                              {(d.description).substring(0, 250)+"..."}
                             </div>
                             </>
                       
                    )
                })
            )}
        </div>
        </>
    );
}