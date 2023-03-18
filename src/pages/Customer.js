import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import { Button } from '@mui/material';

const Customer = () => {

const [name,setName]=useState("");
const [age,setAge]=useState("")
const [locality, setLocality]= useState("")
const [Country, setCountry]= useState("")
const [address, setAddress]= useState("")
const [city, setCity]= useState("")
const [state, setState]= useState("")
const [pin, setPin]= useState("")
const [gender,setGender]=useState("female")
const [isRegistered,setIsRegistered]=useState(false)

const detailCollectionRef = collection(db, "cust-datail")
    let navigate=useNavigate();
    const handleSubmit = async () =>{
      await addDoc(detailCollectionRef, {gender, age, locality, address, city,Country, state, pin, name, userid: auth.currentUser.uid})
  
      localStorage.setItem("isRegistered", true);
      setIsRegistered(true)
      navigate('/')
      
    }

  return (
    <div style={{marginLeft:"500px"}}>
        <form action="">
            <div className="cust-detail">
                <label htmlFor="">Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="cust-detail">
                <label htmlFor="">Age:</label>
                <input type="text" onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div className="cust-detail">
                <label htmlFor="">Gender:</label>
                <select id="inputState" className="details" onClick={(e)=>setGender(e.target.value)}>
      <option>female</option>
      <option >male</option>
      <option>other</option>
      
      </select>
            </div>
            <div className="datails">
            <label htmlFor="">Address:</label>
            <input type="text" onChange={(e)=>setAddress(e.target.value)}/>
            </div>
            <div className="datails">
            <label htmlFor="">Locality:</label>
            <input type="text" onChange={(e)=>setLocality(e.target.value)} />
            </div>
            <div className="datails">
            <label htmlFor="">City:</label>
            <input type="text" onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div className="datails">
            <label htmlFor="">pin:</label>
            <input type="text" onChange={(e)=>setPin(e.target.value)}/>
            </div>
            <div className="datails">
            <label htmlFor="">State:</label>
            <input type="text" onChange={(e)=>setState(e.target.value)}/>
            </div>
            <div className="datails">
            <label htmlFor="">Country:</label>
            <input type="text" onChange={(e)=>setCountry(e.target.value)}/>
            </div>
           <Button onClick={handleSubmit} style={{backgroundColor:"#008ECC",width:"150px", marginTop:"30px",color:"black"}}>submit</Button>
        </form>
    </div>
  )
}

export default Customer