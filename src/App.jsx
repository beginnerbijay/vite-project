import React, { useState } from 'react';
import './App.css'
import  Dashbord  from './Dashbord';
import LogIn from './LogIn';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';


function App() {
  const [user,setUser] = useState("");
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<LogIn setUser={setUser}/>}>
    </Route>
    <Route exact path='/dashboard' element={<Dashbord user={user}/>}>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
