/*import { Button } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import './CSS/register.css';

const Register = ({setIsRegistered}) => {

  const [gender,setGender] = useState("Female");
  const [age, setAge]= useState("");
  const [student, setStudent]= useState("not a student")
  const [school, setSchool]= useState("")
  const [college, setCollege]= useState("")
  const [degree, setDegree]= useState("Engineering")
  const [Country, setCountry]= useState("")
  const [address, setAddress]= useState("")
  const [city, setCity]= useState("")
  const [state, setState]= useState("")
  const [pin, setPin]= useState("")
  const [name,setName]=useState("")

  const detailCollectionRef = collection(db, "user-datail")
  let navigate=useNavigate();
  const handleSubmit = async () =>{
    await addDoc(detailCollectionRef, {gender, age, student, school, college, degree,Country,address, city, state, pin, name, userid: auth.currentUser.uid})

    localStorage.setItem("isRegistered", true);
    setIsRegistered(true)
    navigate('/home')
    
  }
  

  return (
  
   <div className="register" style={{textAlign:"center", marginTop:"100px", display:"flex", flexDirection:"column"}}>
   <form className='details'>
    <div className="name">
      <label htmlFor="">Name</label>
      <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="gender">
    <label> Gender</label>
    <select id="inputState" className="form-select" style={{marginLeft:"30px", width:"200px", padding:"5px", borderRadius:"5px"}} onChange={(e)=>setGender(e.target.value)}>
      
      <option >Female</option>
      <option>Male</option>
      <option>Other</option>
    </select>
    </div>
    <div className="age">

    <label className='cont'>Age</label>
    <input type="text" placeholder='Age' onChange={(e)=>setAge(e.target.value)}/>
    </div>

    <div className="student">
      <label htmlFor="">Student</label>
      <select id="inputState" className="form-select" style={{marginLeft:"30px", width:"200px", padding:"5px", borderRadius:"5px"}} onChange={(e)=>setStudent(e.target.value)}>
      <option>not a student</option>
      <option >School student</option>
      <option>College student</option>
      
    </select>
    </div>
   {student=="School student" && 
   <div className="school">
      <label htmlFor="" className='cont'>School Name</label>
      <input type="text" placeholder='school name...' onChange={(e)=>setSchool(e.target.value)}/>
    </div>}
{  student==='College student' &&
 <div className="college">
      <label htmlFor="" className='cont'>College Name</label>
      <input type="text" placeholder='college name...' onChange={(e)=>setCollege(e.target.value)}/>
    </div>}

    <div className="degree">
      <label htmlFor="">Degree Type</label>
      <select id="inputState" className="form-select" style={{marginLeft:"30px", width:"200px", padding:"5px", borderRadius:"5px"}} onChange={(e)=>setDegree(e.target.value)} placeholder="degree">
      <option >Engineering</option>
      <option>Medical</option>
      <option>Law</option>
    </select>
    </div>

    <div className="address">
      <div className="country">
      <label htmlFor="" className='cont'>Country</label>
      <input type="text" placeholder='country' onChange={(e)=>setCountry(e.target.value)}/>
      </div>
      <div className="house-add">
      <label htmlFor="" className='cont'>Address</label>
      <input type="text"placeholder='current address' onChange={(e)=>setAddress(e.target.value)}/>
      </div>
      <div className="city">
      <label htmlFor="" className='cont'>City</label>
      <input type="text" onChange={(e)=>setCity(e.target.value)}/>
      </div>
      <div className="state">
      <label htmlFor="" className='cont'>State</label>
      <input type="text" onChange={(e)=>setState(e.target.value)}/>
      </div>
      <div className="pincode">
      <label htmlFor="" className='cont'>Pin Code</label>
      <input type="text" onChange={(e)=>setPin(e.target.value)}/>
      </div>
    </div>

   </form>

   <Button onClick={()=>{handleSubmit()}}>submit</Button>

   </div>
    
  )
}

export default Register*/
