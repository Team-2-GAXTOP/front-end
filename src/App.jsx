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
import ResultPage from './pages/ResultPage/ResultPage';

import NewNavbar from './components/Navbar/NewNavbar';
import NewFooter from './components/Footer/NewFooter';

const App = () => {

  const [user, setUser] = useState(getUser());
  console.log(user)
  return (
    <>
      {user ?
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
        <NewNavbar user={user} setUser={setUser} />
        <Routes>
        <Route path='/profile-complete' element={<ProfileCompletePage user={user} setUser={setUser}/> }/>
        <Route path='/' element={<LandingPage user={user} setUser={setUser}/> }/>
        <Route path='/account' element={<Account user={user} setUser={setUser}/>} />
        <Route path='/results' element={<ResultPage user={user} setUser={setUser}/>} />
        </Routes>
        <NewFooter/>

        </>
        :
        <>
          <NewNavbar user={user} setUser={setUser} />
          <main className="App">
            <Routes>
            <Route path='/profile-complete' element={<ProfileCompletePage user={user} setUser={setUser}/> }/>
            <Route path='/' element={<LandingPage user={user} setUser={setUser}/> }/>
            <Route path='/sign-up-free' element={ <AuthPage user={user} setUser={setUser} /> } />
            <Route path="/signup" element={ <SignupForm user={user} setUser={setUser} /> } />
            <Route path="/login" element={ <LoginForm user={user} setUser={setUser} /> } />
            <Route path='/onboarding' element={<OnboardingPage user={user} setUser={setUser}/>} />
          </Routes>
          </main>
          <NewFooter/>
        </>
      }
    </>
  );
}

export default App;
