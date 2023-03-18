import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { Close} from '@mui/icons-material';
import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import './blogs.css';
import Comment from './Comment'
import { useNavigate } from "react-router-dom";
import { auth, db } from '../../firebase-config';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Blogs = () => {

    const[isModalOpen, setisModalOpen] = useState(false);
    const [blogTitle, setBlogTitle] = useState("")
    const [blogContent, setBlogContent] = useState("");
    const close=(<Close />)
    const [like,setLike]=useState(false)
    const [Id,setId]=useState("")
    const [Cshow, setCshow]=useState(false);
    const [uname,setuname]=useState("")
  //  const [likec,setLikeC]=useState(0)

    const blogsCollectionRef = collection(db, "blogs");
    const commentsCollectionRef = collection(db, "comment");
    
     
    let navigate = useNavigate();

    const createPost = async() =>{
        await addDoc(blogsCollectionRef, {
            blogTitle,
            blogContent,
            likeCount:0,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
          });

          setisModalOpen(false);
          navigate('/home')
    }

    const [blogLists, setBlogList] = useState([]);
    const [commentLists, setCommentList] = useState([]);
    const postsCollectionRef = collection(db, "blogs");
  
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setBlogList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

      const getComment=async ()=>{
        const data = await getDocs(commentsCollectionRef);
        setCommentList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
      }

      getComment();
  
      getPosts();
    }, []);
  

    const handleLike=(id)=>{
      setId(id)
    }

    const handleComment=(id,name)=>{
      setId(id);
      setCshow(!Cshow)
      //setuname(name)
      console.log(auth.currentUser)
    }


console.log(auth.currentUser)


  return (
    <div className='blogs'>
        <div className="blog-btn">
        <h5 style={{marginLeft:"250px"}}>Share your success stories, your struggles,your rise in life, etc to motivate and inspire others with your stories.</h5>
        <Button onClick={()=>setisModalOpen(true)} style={{backgroundColor:"#008ECC",color:"black",width:"200px", marginLeft:"600px"}}>
            write a blog
        </Button>

        <Modal
        open = {isModalOpen}
        closeIcon = {close}
        onClose = {()=> setisModalOpen(false)}
        closeOnEsc
        centercloseOnOverlayClick={false}
        styles={{
          
          overlay: {
            height:"auto",

          },
          height:"400px",
        }}
        >
          <div className="inputGp">
          <label> Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setBlogTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              setBlogContent(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}> Submit Post</button>
        </Modal>

       
        </div>

        <div className="blog-body">
            {
                blogLists.map((post)=>{
                    return (
                        <div className="blog">
                            <div className="blogheader">
                            <div className="title">
                                <h4>
                                {post.blogTitle}
                                </h4>
                            </div>
                            <div className="author">
                                <small style={{fontSize:"12px"}}>
                                ~{post.author.name}
                                </small>
                            </div>
                            </div>
                            
                            <div className="blogText">
                                {post.blogContent}
                            </div>
                            <div className="footer" style={{marginTop:"50px"}}>
                              <VolunteerActivismIcon />
                             {/* { !like && <VolunteerActivismIcon onClick={()=>{handleLike(post.id)}} />}
                             {Id===post.id && <VolunteerActivismIcon onClick={()=>setLike(!like)} style={{color:"pink"}}/>} */}
                             
                              <ChatBubbleOutlineIcon onClick={()=>{handleComment(post.id/* ,auth.currentUser.displayName */)}}/>
                              {Cshow && Id===post.id && <Comment postid={Id} name={auth.currentUser.displayName}/> }
                            </div>
                        </div>
                    )
                })
            }

        </div>



    </div>
  )
}

export default Blogs