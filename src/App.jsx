import './App.css';
import { supabase } from './utils/supabase';
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import OnboardingPage from './pages/Onboarding/OnboardingPage';
import OnboardingStepForm from './pages/OnboardingStepForm/OnboardingStepForm';


const App = () => {
	
	// console.log(supabase)

	

	return (
		<>
		{/* <Navbar /> */}
		<Routes>
			<Route
				path='/'
				element={
					<Landing />
				}
			/>
			<Route
				path='/login'
				element={
					<Login />
				}
			/>
			<Route
				path='/signup'
				element={
					<Signup />
				}
				/>
			<Route
				path='/onboarding'
				element={
					<OnboardingPage />
				}
			/>
		</Routes>
			
		</>
	);
}

export default App;
