
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Components/Auth/LogIn/LogIn';
import SignUp from './Components/Auth/SignUp/SignUp';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Registered from './Components/Registered/Registered';
import VolunteerList from './Components/VolunteerList/VolunteerList';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/login' element={<LogIn/> }/>
        <Route path='/signup' element={<SignUp/> }/>
        <Route path='/volunteerlist' element={<VolunteerList/> }/>
        <Route path='/registered' element={<Registered/> }/>
      </Routes>
    </div>
  );
}

export default App;
