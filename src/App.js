
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
//import Problem from './pages/Problem';
import Login from './pages/Login';
import Doubts from './pages/Doubts';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import UserAs from './pages/UserAs';
import Entrepreneur from './pages/Entrepreneur';
import Customer from './pages/Customer';
import Portfolio from './pages/Portfolio';
import Financial from './pages/Financial';
import Blogs from './pages/homecomp/Blogs';
import ProblemStatement from './pages/ProblemStatement';


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  const [isRegistered, setIsRegistered] = useState(localStorage.getItem("isRegistered"));
  const [userid, setUserId]=useState("")
  const [postId,setPostId]=useState("")


  /* useEffect(()=>{
    if(!isAuth){
      window.location.pathname = "/login";
    }
  },[]) */

  



  return (
    <Router>

      <Navbar isAuth={isAuth}/>

      
    
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />}/>
        <Route path="/useras" element={<UserAs />} />
        <Route path="/entrepreneur" element={<Entrepreneur />} />
        <Route path='/customer' element= {<Customer />} />
        <Route path ='/' element = {<Home setUserId={setUserId} setPostId={setPostId}/>} />
        <Route path={`/portfolio/${userid}`} element={<Portfolio userid={userid} postId={postId}/>} />
        <Route path='/financial' element={<Financial />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/doubts" element={<ProblemStatement />} />
       {/*  <Route />
        <Route />
        <Route /> */}

     
      </Routes>
    </Router>
  );
}

export default App;
