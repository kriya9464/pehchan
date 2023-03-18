import React, { useState } from 'react'
import { Close} from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import GradeIcon from '@mui/icons-material/Grade';
import {  Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import { db,auth } from '../firebase-config';


const Feedback = ({userid,id, setfeedback}) => {
    const close=(<Close />)
    const[isModalOpen, setisModalOpen] = useState(true);
    const [star1,setstar1]=useState(false);
    const [star2,setstar2]=useState(false);
    const [star3,setstar3]=useState(false);
    const [star4,setstar4]=useState(false);
    const [star5,setstar5]=useState(false);
    const [comment, setComment]=useState("")

    const [star, setStar]=useState(0);
    const feedbackCollectionRef = collection(db, "feedback");
    let navigate = useNavigate();

    const handleFeedback=async()=>{
        await addDoc(feedbackCollectionRef, {
            star,
            comment,
            postid:id,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
          });

          setisModalOpen(false);
          window.location.href = '/' 
    }

  return (
    <div>

        {/* <label>feedback {id}</label> */}
        <Modal
        open = {isModalOpen}
        closeIcon = {close}
        onClose = {()=> {setisModalOpen(false); setfeedback(false)}}
        closeOnEsc
        centercloseOnOverlayClick={false}
        styles={{
          
          overlay: {
            height:"auto",

          },
          height:"400px",
        }}
        >
          <div className="stars" style={{display:"flex"}}>
            <div className="star1">
          {!star1 && <small><GradeIcon onClick={()=>{setstar1(!star1); setStar(1)}} style={{color:"grey"}}/></small>}
          {star1 && <small><GradeIcon style={{color:"yellow"}} onClick={()=>setstar1(!star1)}/></small>}
          </div>
          <div className="star2">
          {!star2 && <small><GradeIcon onClick={()=>{setstar1(!star1); setstar2(!star2); setStar(2)}} style={{color:"grey"}}/></small>}
          {star2 && <small><GradeIcon style={{color:"yellow"}}/></small>}
                            </div>
                            <div className="star3">
                            {!star3 && <small><GradeIcon onClick={()=>{setstar1(!star1); setstar2(!star2); setstar3(!star3); setStar(3)}} style={{color:"grey"}}/></small>}
          {star3 && <small><GradeIcon style={{color:"yellow"}}/></small>}
                            </div>
                            <div className="star4">
                            {!star4 && <small><GradeIcon onClick={()=>{setstar1(!star1); setstar2(!star2); setstar3(!star3); setstar4(!star4);setStar(4)}} style={{color:"grey"}}/></small>}
          {star4 && <small><GradeIcon style={{color:"yellow"}}/></small>}
                            </div>
                            <div className="star5">
                            {!star5 && <small><GradeIcon onClick={()=>{setstar1(!star1); setstar2(!star2); setstar3(!star3); setstar4(!star4); setstar5(!star5); setStar(5)}} style={{color:"grey"}}/></small>}
          {star5 && <small><GradeIcon style={{color:"yellow"}}/></small>}
                            </div>
                            <div className="comment">
                            </div>
                            <textarea onChange={(e)=>setComment(e.target.value)}/>
                            <Button onClick={handleFeedback}>submit</Button>
                            </div>

                            
        </Modal> 
    </div>
  )
}

export default Feedback