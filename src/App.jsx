import './App.css';
import { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import AuthPage from './pages/AuthPage/AuthPage';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import ProfileCompletePage from './pages/ProfileCompletePage/ProfileCompletePage';
import LandingPage from './pages/LandingPage/LandingPage';
import SignupForm from './components/SignupForm/SignupForm';
import LoginForm from './components/LoginForm/LoginForm';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { getUser } from '../src/utils/users-service';
import Account from './pages/Account/Account';

const App = () => {

  const [user, setUser] = useState(getUser());

  return (
    <>
      {user ?
        <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
        <Route path='/profile-complete' element={<ProfileCompletePage setUser={setUser} userState={user}/> }/>
        <Route path='/onboarding' element={<OnboardingPage setUser={setUser} userState={user}/>} />
        <Route path='/account' element={<Account setUser={setUser} userState={user} />} />
        </Routes>
        <Footer/>

        </>
        :
        <>
          <NavBar user={user} setUser={setUser} />
          <main className="App">
          <Routes>
            <Route path='/' element={<LandingPage setUser={setUser} /> }/>
            <Route path='/sign-up-free' element={ <AuthPage setUser={setUser} /> } />
            <Route path="/signup" element={ <SignupForm setUser={setUser} userState={user} /> } />
            <Route path="/login" element={ <LoginForm setUser={setUser} userState={user} /> } />
          </Routes>
          </main>
          <Footer/>
        </>
      }
    </>
  );
}

export default App;
