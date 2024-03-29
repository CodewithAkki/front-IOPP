import './App.css'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './home/homepage';
import Login from './login/login'
import Project from './project/project'
import Profile from './profile/profile'
import Registration from './signup/signup'
import Admin from './admin/admin'
import About from './about/about';
import Event from './event/event';
import Approval from './approval/approval';
import { createContext, useReducer } from 'react';
import {reducer,initialState} from '../src/UseReducer';
export const UserContext= createContext();  
const Rounting =()=>{
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={ <Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/project" element={<Project/>} />
  <Route path="/profile" element={<Profile/>} />
  <Route path="/registration" element={<Registration/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/approval" element={<Approval/>} />
  <Route path="/event" element={<Event/>} />
  <Route path="/admin" element={<Admin/>} />

   
    </Routes>
  </BrowserRouter>
  )
}
function App() {
 const [state,dispatch]=useReducer(reducer,initialState );    
  return (
    <div className="App">
      <UserContext.Provider value={{state,dispatch}}>
     <Rounting/>
    </UserContext.Provider>
    </div>
  )
}




export default App;
