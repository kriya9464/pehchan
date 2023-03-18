import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Close, ResetTvOutlined} from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';

const ProblemStatement = () => {

    const [doubtLists, setDoubtList] = useState([]);
    const doubtsCollectionRef = collection(db, "doubts");
    const [ansLists, setAnsList] = useState([]);
    const answerCollectionRef = collection(db, "ans");
    const close=(<Close />)
    const[isModalOpen, setisModalOpen] = useState(false);
    const [Id, setId]=useState("")
    const [pid,setPid]=useState("")
    const [ans,setAns]=useState("")
    const [show,setShow]=useState(false)
    const [resolve,setResolve]=useState(false)

    useEffect(() => {
        const getdoubts = async () => {
          const data = await getDocs(doubtsCollectionRef);
          setDoubtList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
  
        const getans = async () => {
            const data = await getDocs(answerCollectionRef);
            setAnsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
          };

          getans();
    
        getdoubts();
      }, []);


      const handleAdd=(id)=>{
        setId(id);
        setisModalOpen(true)
      }

      const ansCollectionRef = collection(db, "ans");
    
     
      let navigate = useNavigate();

      const handleAns=async()=>{
        await addDoc(ansCollectionRef, {
            Id,
            ans,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
          });
    
          setisModalOpen(false);
          navigate('/doubts')
      }

      const handleResolve=(id,postid)=>{
        if(id===auth.currentUser.uid){
          setResolve(true);
          setPid(postid)
        }
      }
    
  return (
    <div>
        {
            doubtLists.map((post)=>{
                return(
                <div className="job" style={{marginLeft:"250px"}}>
                    <div className="dbody">
                      <p>  {post.problem}</p>
                    </div>
                    <div className="footer">
                      <div className="_a">
                        <Button onClick={()=>{setShow(!show); setId(post.id)}}>answer(s)</Button>
                        <AddIcon onClick={()=>{handleAdd(post.id)}}/>
                        </div>
                        {!resolve   && <Button onClick={()=>handleResolve(post.author.id,post.id)} style={{backgroundColor:"red",color:"white"}}>unresolved</Button>}
                        {resolve  && post.id!==pid && <Button onClick={()=>handleResolve(post.author.id,post.id)} style={{backgroundColor:"red",color:"white"}}>unresolved</Button>}
                        {resolve && post.id===pid && <Button style={{backgroundColor:"green",color:"black"}}>resolved</Button>}
                        { 
                             <Modal
                             open = {isModalOpen && Id===post.id}
                             closeIcon = {close}
                             onClose = {()=> {setisModalOpen(false)}}
                             closeOnEsc
                             centercloseOnOverlayClick={false}
                             styles={{
                               
                               overlay: {
                                 height:"auto",
                     
                               },
                               height:"400px",
                             }}
                             >
                                <textarea onChange={(e)=>{setAns(e.target.value)}}/>
                                <Button onClick={handleAns}>submit</Button>
                                </Modal>
                        }
                    </div>
                  { show && Id===post.id && <div className="showans">
                        {
                            (ansLists.filter((a)=>a.Id===post.id)).map((answer)=>{
                                return (
                                    <div className="ans" style={{marginBottom:"20px"}}>
                                        <div className="anshead">
                                         <small style={{fontSize:"12px"}}>  {answer.author.name}</small> 
                                        </div>
                                        <div className="ansbody">
                                            {answer.ans}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>}


                </div>
                )
            })


        }
    </div>
  )
}

export default ProblemStatement