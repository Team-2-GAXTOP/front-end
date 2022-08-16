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
import Onboarding from './pages/Onboarding/Onboarding';

const App = () => {
	
	// console.log(supabase)

	

	return (
		<>
		<Navbar />
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
					<Onboarding />
				}
			/>
		</Routes>
			
		</>
	);
}

export default App;
