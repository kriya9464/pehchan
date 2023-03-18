
import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { Close} from '@mui/icons-material';
import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase-config';

const Problems = () => {

    const[isModalOpen, setisModalOpen] = useState(false);
   /*  const [blogTitle, setBlogTitle] = useState("") */
    const [problemContent, setProblemContent] = useState("");
    const close=(<Close />)

    const problemsCollectionRef = collection(db, "problems");
    let navigate = useNavigate();

    const handleProblem = async() =>{
        await addDoc(problemsCollectionRef, {
           
            problemContent,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
          });

          setisModalOpen(false);
          window.location.pathname = "/problem";
    }

    const [problemLists, setProblemList] = useState([]);
    const postsCollectionRef = collection(db, "problems");
  
    useEffect(() => {
      const getPosts = async () => {
        const data = await getDocs(postsCollectionRef);
        setProblemList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getPosts();
    }, []);
  

  return (
    <div className='problems'>
    <div className="problem-btn">
    <h2>Problems</h2>
    <Button onClick={()=>setisModalOpen(true)}>
        share your problem
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
      <label> Problem:</label>
      <textarea
        placeholder="Post..."
        onChange={(event) => {
            setProblemContent(event.target.value);
        }}
      />
    </div>
    <button onClick={handleProblem}> Submit Post</button>
    </Modal>

   
    </div>

    <div className="problem-body">
        {
            problemLists.map((post)=>{
                return (
                    <div className="problems">
                        <div className="problemheader">
                        
                        <div className="author">
                            <small >
                            {post.author.name}
                            </small>
                        </div>
                        </div>
                        
                        <div className="problemText">
                            {post.problemContent}
                        </div>
                    </div>
                )
            })
        }

    </div>

</div>
  )
}

export default Problems