import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';
import {storage} from '../firebase-config';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import './CSS/entre.css'

const Entrepreneur = () => {

const [cat,setCat]=useState("salon")
const [show,setShow]=useState(false);
const [gender,setGender] = useState("Female");
const [age, setAge]= useState("");

const [locality, setLocality]= useState("")
const [Country, setCountry]= useState("")
const [address, setAddress]= useState("")
const [city, setCity]= useState("")
const [state, setState]= useState("")
const [pin, setPin]= useState("")
const [name,setName]=useState("")
const [video, setVideo]=useState("")
const [intro, setIntro]=useState("hello, my name is ----. i run a salon. i am doing this work since 2 years so have good experience. in order to see my work please check my portfolio. thank you")
const [price1, setPrice1]=useState("")
const [price2, setPrice2]=useState("")
const [price3, setPrice3]=useState("")
const [contact, setContact]=useState("")
const [isRegistered,setIsRegistered]=useState()
const [img1,setImg1]=useState(null)
const [img2,setImg2]=useState(null)
const [img3,setImg3]=useState(null)
const [img4,setImg4]=useState(null)
const [img5,setImg5]=useState(null)
const [profile,setProfile]=useState(null)
const [url1,setUrl1]=useState(null)
const [url2,setUrl2]=useState(null)
const [url3,setUrl3]=useState(null)
const [url4,setUrl4]=useState(null)
const [url5,setUrl5]=useState(null)
const [prourl,setProurl]=useState(null)
const [counthire,setCountHire]=useState(0)



const handleDone=()=>{
    const imageRef1 = ref(storage, "img1");
    uploadBytes(imageRef1,img1)
      .then(() => {
        getDownloadURL(imageRef1)
          .then((url) => {
              console.log(url)
            setUrl1(url);
            
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImg1(null);
        console.log("url1",url1)
      })
      .catch((error) => {
        console.log(error.message);
      });
    const imageRef2 = ref(storage, "img2");
    uploadBytes(imageRef2,img2)
      .then(() => {
        getDownloadURL(imageRef2)
          .then((url) => {
            console.log(url)
            setUrl2(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImg2(null);
        console.log("url2",url2)
      })
      .catch((error) => {
        console.log(error.message);
      });
    const imageRef3 = ref(storage, "img3");
    uploadBytes(imageRef3,img3)
      .then(() => {
        getDownloadURL(imageRef3)
          .then((url) => {
            setUrl3(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImg3(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
    const imageRef4 = ref(storage, "img4");
    uploadBytes(imageRef4,img4)
      .then(() => {
        getDownloadURL(imageRef4)
          .then((url) => {
            setUrl4(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImg4(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
    const imageRef5 = ref(storage, "img5");
    uploadBytes(imageRef5,img5)
       .then(() => {
        getDownloadURL(imageRef5)
          .then((url) => {
            setUrl5(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImg5(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
    const imageRefpro = ref(storage, "imgpro");
    uploadBytes(imageRefpro,profile)
       .then(() => {
        getDownloadURL(imageRefpro)
          .then((url) => {
            setProurl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setProfile(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
}


    const detailCollectionRef = collection(db, "entrepreneur-datail")
    let navigate=useNavigate();
    const handleSubmit = async () =>{
      await addDoc(detailCollectionRef, {gender, age, cat, locality, address, city,Country,contact, video, state, pin, name, intro, price1, price2, price3, url1,url2,url3,url4,url5,prourl,counthire,userid: auth.currentUser.uid,photo:auth.currentUser.photoURL })

     
     //   console.log(url1)
   
  //console.log(url1)
      localStorage.setItem("isRegistered", true);
      setIsRegistered(true)
      navigate('/customer')
      
    }



    return (
    <div style={{marginLeft:"500px"}} className="e">
        <form action="">
            <div className="datails">
            <label htmlFor="">Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            
            </div>
            <div className="details">
                <label htmlFor="">profile image</label>
                <input type="file" onChange={(e)=>setProfile(e.target.files[0])}/>
            </div>
            <div className="datails">
            <label htmlFor="">Gender:</label>
            <select id="inputState" className="details" onClick={(e)=>setGender(e.target.value)}>
      <option>female</option>
      <option >male</option>
      <option>other</option>
      
      </select>
            </div>
            <div className="datails">
            <label htmlFor="">Age:</label>
            <input type="text" onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div className="datails">
            <label htmlFor="">category:</label>
            <select id="inputState" className="details" onClick={(e)=>setCat(e.target.value)}>
      <option>salon</option>
      <option >wall painter</option>
      <option>dry cleaner</option>
      <option>tailor</option>
      <option>house builder</option>
      
    </select>
            </div>
            <div className="details">
                <label htmlFor="">Mobile number:</label>
                <input type="text" onChange={(e)=>setContact(e.target.value)}/> 
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
            <div className="pic">
                <label>Upload some pictures of your previous work</label>
                <input type="file" onChange={(e)=>setImg1(e.target.files[0])}/>
                <input type="file" onChange={(e)=>setImg2(e.target.files[0])} style={{marginRight:"200px"}}/>
                <input type="file" onChange={(e)=>setImg3(e.target.files[0])}/>
                <input type="file" onChange={(e)=>setImg4(e.target.files[0])} style={{marginRight:"200px"}}/>
                <input type="file" onChange={(e)=>setImg5(e.target.files[0])}/>
            <Button onClick={handleDone}>done</Button>
            </div>
            <div className="datails">
            <label htmlFor="">Video Link: if any </label>
            <input type="text" onChange={(e)=>setVideo(e.target.value)}/>
            </div>
            <div className="datails">
            <label htmlFor="">Introduction to be posted on site for customers:</label>
            

             <textarea placeholder={show? "hello, my name is ----. i run a salon. i am doing this work since 2 years so have good experience. in order to see my work please check my portfolio. thank you" : "intro should not bhi more thsn 200 words"} 
             onChange={(e)=>setIntro(e.target.value)} style={{width:"400px",display:"block",height:"200px"}} />
            
            <Button onClick={()=>setShow(!show)}>generate automatically</Button>

            </div>
            <p>Additional information for better customer understanding</p>
            {cat==="salon" && 
            <div>
                <div className="details">
                <label htmlFor="">waxing price range:</label>
                <input type="text" onChange={(e)=>setPrice1(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">facial price range:</label>
                <input type="text" onChange={(e)=>setPrice2(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">haircut price range:</label>
                <input type="text" onChange={(e)=>setPrice3(e.target.value)}/>
                </div>
                </div>}
           
            {cat==="wall painter" && 
            <div>
                <div className="details">
                <label htmlFor="">price according to per day:</label>
                <input type="text" onChange={(e)=>setPrice1(e.target.value)}/>
                </div>
              
                </div>}
            {cat=="dry cleaner" && 
            <div>
                <div className="details">
                <label htmlFor="">price range for dry cleaning:</label>
                <input type="text" onChange={(e)=>setPrice1(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">price range for charak:</label>
                <input type="text" onChange={(e)=>setPrice2(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">price range for ironing:</label>
                <input type="text" onChange={(e)=>setPrice3(e.target.value)}/>
                </div>
                </div>}
            {cat=="tailor" && 
            <div>
                <div className="details">
                <label htmlFor="">price range for kurti:</label>
                <input type="text" onChange={(e)=>setPrice1(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">price range for suit:</label>
                <input type="text" onChange={(e)=>setPrice2(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">price range for froks:</label>
                <input type="text" onChange={(e)=>setPrice3(e.target.value)}/>
                </div>
                </div>}
            {cat=="house builder" && 
            <div>
                <div className="details">
                <label htmlFor="">price range for 2 story building :</label>
                <input type="text" onChange={(e)=>setPrice1(e.target.value)} />
                </div>
                <div className="details">
                <label htmlFor="">price range for 3 story building:</label>
                <input type="text" onChange={(e)=>setPrice2(e.target.value)}/>
                </div>
                <div className="details">
                <label htmlFor="">price range for 100 acres of land:</label>
                <input type="text" onChange={(e)=>setPrice3(e.target.value)}/>
                </div>
                </div>}

                <div className="share">
                    
                </div>

                <Button onClick={handleSubmit}>Submit</Button> 
                        
        </form>
    </div>
  )
}

export default Entrepreneur
