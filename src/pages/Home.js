import React, { useEffect, useState } from 'react'
//import Blogs from './homecomp/Blogs';
import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import { db,auth } from '../firebase-config';
import { Avatar, Button } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { Close} from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import { Link, useNavigate } from 'react-router-dom';
import Feedback from './Feedback'
import './CSS/home.css'

const Home = ({setUserId,setPostId}) => {

  const [eLists, setEList] = useState([]);
  const [fLists, setFList] = useState([]);
  const [vlist, setVlist]=useState([]);
  const ECollectionRef = collection(db, "entrepreneur-datail");
  const fCollectionRef=collection(db, "feedback")
  const userCollectionRef=collection(db, "cust-datail")
  const hiredCollectionRef=collection(db, "hire-detail")
  const[isModalOpen, setisModalOpen] = useState(false);
  const [feedback,setfeedback]=useState(false)
  const close=(<Close />)
  const [Id, setId]=useState("");
  const [pid, setPid]=useState("");
  const [all,setall]=useState(true);
  const [near,setnear]=useState(false);
  const [category, setCategory]=useState("all")
  const [udetail, setuDetail]=useState([]);
  const [hire, sethire]=useState([]);
  const [uLocality,setUlocality]=useState("");
  const [uCity, setUcity]=useState("");
  const [uState,setUstate]=useState("")
  const [vf,setVf]=useState(false)
  console.log("auth",auth.currentUser)

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(ECollectionRef);
      //console.log(data);
      setEList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getFeedback= async()=>{
      const data = await getDocs(fCollectionRef);
      console.log(data);
      setFList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const getuser=async ()=>{
      const data = await getDocs(userCollectionRef);
      console.log(data);
      setuDetail(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

const gethire=async()=>{
  const data = await getDocs(hiredCollectionRef);
      console.log(data);
      sethire(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
}


gethire();
    getuser();

    getFeedback();

    getPosts();
  }, []);

/* const handleFeedback =(id)=>{
  setfeedback(!feedback);
  setId(id);
} */

const handleFview =(id)=>{
  const newlist=fLists.filter((feed)=>(feed.postid===id))
  setVlist(newlist)
  //console.log("feed",vlist)
  setPid(id)
  setVf(!vf)
  
}


const handleNear=(uid)=>{
 const newlist=udetail.filter((u)=>(u.userid===uid));
 console.log(newlist)
 newlist.map((p)=>(setUlocality(p.locality)))
 /* console.log(newlist.locality,"direct")
 
 setUcity(newlist.city)
 setUstate(newlist.state) */
 console.log(uLocality, "local")
 setnear(true);

}
const hireCollectionRef = collection(db, "hire-detail")
  let navigate=useNavigate();

const handleHire=async(pid,uid)=>{
  
  if(uid!==auth.currentUser.uid){
    if(window.confirm('Are u sure you want to delete this post?')){
    await addDoc(hireCollectionRef, {
      pid,
      userid:auth.currentUser.uid,
      name:auth.currentUser.displayName
    })
    setfeedback(!feedback);
  setId(pid);
  }
  }
   //   console.log(url1)
 
//console.log(url1)
    /* localStorage.setItem("isRegistered", true);
    setIsRegistered(true) */
    
    /* window.location.href = '/home' */
  }




  return (
    <div className='home'>
     <div className="home-head">
    {/*   <label htmlFor="">select category</label> */}
      <select id="inputState" className="details" style={{width:"400px", height:"40px",fontSize:"20px",marginLeft:"50px"}}onClick={(e)=>setCategory(e.target.value)}>
      <option>all</option>
      <option>salon</option>
      <option >wall painter</option>
      <option>dry cleaner</option>
      <option>tailor</option>
      <option>house builder</option>
      
    </select>
    <Button style={{marginLeft:"150px",backgroundColor:"#008ECC",color:"black"}} onClick={()=>{handleNear(auth.currentUser.uid)}}>workers near me</Button>
    </div>

{        category==="all" && !near &&
                eLists.map((post)=>{
                    return (
                        <div className="job">
                            <div className="jobhead">
                            
                              <Avatar />
                                <h6>
                                {post.name}
                                </h6>
                            
                            
                            </div>
                            <div className="job-intro">
                                <p>
                                  {post.intro}
                                </p>
                                <div className="port">
                                <Button onClick={()=>{setUserId(post.userid);setPostId(post.id)}}> <Link to={`/portfolio/${post.userid}`}>view my portfolio</Link></Button>
                                </div>
                            </div>
                            
                           <div className="footer">
                            <div className="vf">
                            <Button onClick={()=>{handleFview(post.id,post.userid)}}>view feedback</Button>
                            
                            { post.id===pid && vf &&
                               <div className="feed">
                                {vlist.map((post)=>{
                                  return(
                                    <div className="feed-container">
                                       <div className="head">
                                        {post.author.name}

                                        </div>
                                        <div className="feed-body">
                                          {post.star}
                                          <GradeIcon />
                                          <small>{post.comment}</small>
                                        </div>
                                    </div>
                                  )
                                })}
                               
                              </div>
                            }
                            </div>
                            <small><span style={{marginRight:"10px"}}>No. of hirings:</span>{(hire.filter((p)=>p.pid===post.id)).length}</small>
                            
                            <Button onClick={()=>handleHire(post.id,post.userid)}>hire</Button>
                            {/* <Button onClick={()=>{handleFeedback(post.id)}}>feedback</Button> */}
                            {feedback && post.id===Id && <Feedback userid={post.userid} id={Id} setfeedback={setfeedback}/>}
                           </div>

                           <div className="sidebar">
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="100" && <img src="https://img.freepik.com/premium-vector/bronze-award-sport-medal-winners-with-blue-ribbon-third-place-trophy-honor-badges_599062-3495.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="500" && <img src="https://img.freepik.com/premium-vector/silver-award-sport-medal-winners-with-blue-ribbon-second-place-trophy-honor-badges_599062-3662.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="2000" && <img src="https://cdn4.vectorstock.com/i/1000x1000/79/13/modern-gold-circle-metal-badge-vector-13367913.jpg"/>}</small>
                            {/* <Button onClick={()=>setisModalOpen(true)}>details</Button> */}
                            

                        
                           </div>
                        </div>
                    )
                })
            }
{        category==="all" && near && (eLists.filter((p)=>(p.locality===uLocality || p.city===uCity))).map((post)=>{
                    return (
                        <div className="job">
                            <div className="jobhead">
                            <Avatar />
                                <h6>
                                {post.name}
                                </h6>
                            
                            </div>
                            <div className="job-intro">
                                <p>
                                  {post.intro}
                                </p>
                                <div className="port">
                                <Button onClick={()=>{setUserId(post.userid);setPostId(post.id)}}> <Link to={`/portfolio/${post.userid}`}>view my portfolio</Link></Button>
                                </div>
                            </div>
                            
                           <div className="footer">
                            <div className="vf">
                            <Button onClick={()=>{handleFview(post.id)}}>view feedback</Button>
                            
                            { post.id===pid &&
                               <div className="feed">
                                {vlist.map((post)=>{
                                  return(
                                    <div className="feed-container">
                                       <div className="head">
                                        {post.author.name}

                                        </div>
                                        <div className="feed-body">
                                          {post.star}
                                          <GradeIcon style={{width:"10px",marginRight:"20px"}}/>
                                          <small>{post.comment}</small>
                                        </div>
                                    </div>
                                  )
                                })}
                               
                              </div>
                            }
                            </div>
                            <small><span style={{marginRight:"10px"}}>No. of hirings:</span>{(hire.filter((p)=>p.pid===post.id)).length}</small>
                            
                            <Button onClick={()=>handleHire(post.id,post.userid)}>hire</Button>
                            {/* <Button onClick={()=>{handleFeedback(post.id)}}>feedback</Button> */}
                            {feedback && post.id===Id && <Feedback userid={post.userid} id={Id} setfeedback={setfeedback}/>}
                           </div>

                           <div className="sidebar">
                           <small>{(hire.filter((p)=>p.pid===post.id)).length==="100" && <img src="https://img.freepik.com/premium-vector/bronze-award-sport-medal-winners-with-blue-ribbon-third-place-trophy-honor-badges_599062-3495.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="500" && <img src="https://img.freepik.com/premium-vector/silver-award-sport-medal-winners-with-blue-ribbon-second-place-trophy-honor-badges_599062-3662.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="2000" && <img src="https://cdn4.vectorstock.com/i/1000x1000/79/13/modern-gold-circle-metal-badge-vector-13367913.jpg"/>}</small>
                            {/* <Button onClick={()=>setisModalOpen(true)}>details</Button> */}
                            

                        
                           </div>
                        </div>
                    )
                })
            }


{
  category!=="all" && !near && (eLists.filter((p)=>p.cat===category)).map((post)=>{

    return (
      <div className="job">
          <div className="jobhead">
          <Avatar />
                                <h6>
                                {post.name}
                                </h6>
          
          </div>
          <div className="job-intro">
              <p>
                {post.intro}
              </p>
              <div className="port">
              <Button onClick={()=>{setUserId(post.userid);setPostId(post.id)}}> <Link to={`/portfolio/${post.userid}`}>view my portfolio</Link></Button>
          </div>
          </div>
         <div className="footer">
          <div className="vf">
          <Button onClick={()=>{handleFview(post.id)}}>view feedback</Button>
          
          { post.id===pid &&
             <div className="feed">
              {vlist.map((post)=>{
                return(
                  <div className="feed-container">
                     <div className="head">
                      {post.author.name}

                      </div>
                      <div className="feed-body">
                        {post.star}
                        <GradeIcon />
                        <small>{post.comment}</small>
                      </div>
                  </div>
                )
              })}
             
            </div>
          }
          </div>
          <small><span style={{marginRight:"10px"}}>No. of hirings:</span>{(hire.filter((p)=>p.pid===post.id)).length}</small>
          
          <Button onClick={()=>handleHire(post.id,post.userid)}>hire</Button>
          {/* <Button onClick={()=>{handleFeedback(post.id)}}>feedback</Button> */}
          {feedback && post.id===Id && <Feedback userid={post.userid} id={Id} setfeedback={setfeedback}/>}
         </div>

         <div className="sidebar">
         <small>{(hire.filter((p)=>p.pid===post.id)).length==="100" && <img src="https://img.freepik.com/premium-vector/bronze-award-sport-medal-winners-with-blue-ribbon-third-place-trophy-honor-badges_599062-3495.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="500" && <img src="https://img.freepik.com/premium-vector/silver-award-sport-medal-winners-with-blue-ribbon-second-place-trophy-honor-badges_599062-3662.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="2000" && <img src="https://cdn4.vectorstock.com/i/1000x1000/79/13/modern-gold-circle-metal-badge-vector-13367913.jpg"/>}</small>
          {/* <Button onClick={()=>setisModalOpen(true)}>details</Button> */}
          

      
         </div>
      </div>
  )
  })
}


{
  category!=="all" && near && (eLists.filter((p)=>(p.cat===category && (p.locality===uLocality || p.city===uCity) ))).map((post)=>{

    return (
      <div className="job">
          <div className="jobhead">
          <Avatar />
                                <h6>
                                {post.name}
                                </h6>
          
          </div>
          <div className="job-intro">
              <p>
                {post.intro}
              </p>
              <div className="port">
              <Button onClick={()=>{setUserId(post.userid);setPostId(post.id)}}> <Link to={`/portfolio/${post.userid}`}>view my portfolio</Link></Button>
          </div>
          </div>
         <div className="footer">
          <div className="vf">
          <Button onClick={()=>{handleFview(post.id)}}>view feedback</Button>
          
          { post.id===pid &&
             <div className="feed">
              {vlist.map((post)=>{
                return(
                  <div className="feed-container">
                     <div className="head">
                      {post.author.name}

                      </div>
                      <div className="feed-body">
                        {post.star}
                        <GradeIcon />
                        <small>{post.comment}</small>
                      </div>
                  </div>
                )
              })}
             
            </div>
          }
          </div>
          <small><span style={{marginRight:"10px"}}>No. of hirings:</span>{(hire.filter((p)=>p.pid===post.id)).length}</small>
          
          <Button onClick={()=>handleHire(post.id,post.userid)}>hire</Button>
          {/* <Button onClick={()=>{handleFeedback(post.id)}}>feedback</Button> */}
          {feedback && post.id===Id && <Feedback userid={post.userid} id={Id} setfeedback={setfeedback}/>}
         </div>

         <div className="sidebar">
         <small>{(hire.filter((p)=>p.pid===post.id)).length==="100" && <img src="https://img.freepik.com/premium-vector/bronze-award-sport-medal-winners-with-blue-ribbon-third-place-trophy-honor-badges_599062-3495.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="500" && <img src="https://img.freepik.com/premium-vector/silver-award-sport-medal-winners-with-blue-ribbon-second-place-trophy-honor-badges_599062-3662.jpg?w=2000"/>}</small>
                            <small>{(hire.filter((p)=>p.pid===post.id)).length==="2000" && <img src="https://cdn4.vectorstock.com/i/1000x1000/79/13/modern-gold-circle-metal-badge-vector-13367913.jpg"/>}</small>
          {/* <Button onClick={()=>setisModalOpen(true)}>details</Button> */}
          

      
         </div>
      </div>
  )
  })
}
           
      
    </div>
  )
}

export default Home