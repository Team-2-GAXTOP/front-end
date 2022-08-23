// import './ProfileCompletePage.css';

import { useNavigate } from "react-router-dom";
import {supabase} from "../../utils/supabase";

const ResultPage = ({ user, setUser }) => {
  const navigate = useNavigate();

  const getResultData = async (e) => {
    e.preventDefault()

   
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
    .match({ eligibility: role, amount: amount });
    console.log(data)
  }


  return (
    <>
      <div>
      <form onSubmit={getResultData}><button type="submit" id="signin-btn">Next</button></form>
        
      </div>
    </>
  )
}

export default ResultPage
