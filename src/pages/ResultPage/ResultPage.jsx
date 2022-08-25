// import './ProfileCompletePage.css';
import { useState , useEffect} from "react"

import { useNavigate } from "react-router-dom";
import {supabase} from "../../utils/supabase";
import ResultCard from '../../components/ResultCard/ResultCard'


const ResultPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  
  const [isBusy, setBusy] = useState(true)
  const [resultData, setResultData] = useState([]);

  useEffect(function () {
    async function getResultData() {
      const {data:questions, err}  = await supabase
      .from('user_profile')
      .select('*')
      .eq('userID', user.id);
      console.log(questions)
   
      const zipcode = questions[0].zipcode;
      const role = questions[0].role;
      const amount = questions[0].amount;
      console.log (role + " " + amount )
      
      const { data, error } = await supabase
      .from('grants')
      .select('*')
      .match({ eligibility: role })
        setBusy(false);
        setResultData(data);
    }
    getResultData();
}, []);



  return (
    <>
      <div>
      <h3>Here are the grant matches!</h3>
      <div><label>Turn on Notifications for your search</label></div>
    
      <div >
                <ResultCard isBusy={isBusy} dataR={resultData} user={user}/>
            </div>
      </div>
    </>
  )
}

export default ResultPage
