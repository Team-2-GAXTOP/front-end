import './App.css';
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import AuthPage from './pages/AuthPage/AuthPage';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import OnboardingStepForm from './pages/OnboardingStepForm/OnboardingStepForm';
import ProfileCompletePage from './pages/ProfileCompletePage/ProfileCompletePage';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupForm from './components/SignupForm/SignupForm';
import LoginForm from './components/LoginForm/LoginForm';
import NavBar from './components/Navbar/Navbar';
import { logout } from '../src/utils/Auth'
import { getUser } from '../src/utils/users-service';



const App = () => {

  const [user, setUser] = useState(getUser());

  const navigate = useNavigate();
  return (
    <main className="App">
      {user ?
        <>
				
        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<LandingPage setUser={setUser} /> }/>
            <Route path='/sign-up-free' element={ <AuthPage setUser={setUser} /> } />
            <Route path="/signup" element={ <SignupForm setUser={setUser} userState={user} /> } />
            <Route path="/login" element={ <LoginForm setUser={setUser} userState={user} /> } />
            <Route path='/profile-complete' element={<ProfileCompletePage /> }/>
						<Route path='/onboarding' element={<OnboardingPage />} />
          </Routes>
        </>
      }
    </main>
  );
}

export default App;
