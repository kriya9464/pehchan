import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { auth, db } from '../../firebase-config'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Comment = ({postid,name}) => {

const [comment,setComment]=useState("")
const commentCollectionRef = collection(db, "comment");
let navigate = useNavigate();
const [commentLists, setCommentList] = useState([]);
const commentsCollectionRef = collection(db, "comment");

const submitComment=async()=>{
  await addDoc(commentCollectionRef, {
    postid,
    comment,
    name
    /* author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }, */
  });

  
  navigate('/blogs')
}


useEffect(() => {
  
  const getComment=async ()=>{
    const data = await getDocs(commentsCollectionRef);
    setCommentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
  }

  getComment();

  
}, []);


  return (
    <div>
      <input type="text" onChange={(e)=>setComment(e.target.value)}/>
      <Button onClick={()=>submitComment()}>Post</Button>
      <div className="show-comment">
          {
            (commentLists.filter((p)=>p.postid===postid)).map((post)=>{
              return (
                <div className="comm">

                
                <div className="chead">
                 <small> {post.name}</small>
                </div>
                <div className="cbody">
                    <p>{post.comment}</p>
                </div>

                </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default Comment