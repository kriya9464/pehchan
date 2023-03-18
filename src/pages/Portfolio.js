import React, { useEffect, useState } from 'react'
import { addDoc, collection, getDocs , doc} from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import './CSS/portfolio.css'

const Portfolio = ({userid,postId}) => {

  const [portList,setPortList]=useState([])
  const portCollectionRef=collection(db,'entrepreneur-datail')

  useEffect(() => {
    const getPortfolio = async () => {
      const data = await getDocs(portCollectionRef);
      setPortList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

   

    getPortfolio();
  }, []);



  return (
    <div className="portfolio-cont">
      { 
        (portList.filter((p)=>p.id===postId)).map((post)=>{
          return(
          <div className="portfolio">
            <div className="portfolio-head">
                <div className="leftside">
                  <img src={post.prourl? post.prourl:post.photo} alt="" />
                </div>
                <div className="rightside">
                  <div className="name">
                    <h2>{post.name}</h2>
                  </div>
                  <div className="intro-text">
                    <p>{post.intro}</p>
                  </div>
                </div>
            </div>
            <div >
              <div className="heading">
                <h3>Few of my works</h3>
              </div>
              <div className="portfolio-body">
              <div className="work" /* style={{width:"400px",border:"2px solid black"}} */>
                <img src={post.url1} alt="" />
              </div>
              <div className="work">
                <img src={post.url2} alt="" />
              </div>
              <div className="work">
                <img src={post.url3} alt="" />
              </div>
              <div className="work">
                <img src={post.url4} alt="" />
              </div>
              <div className="work">
                <img src={post.url5} alt="" />
              </div>
              <div className="work">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFO-DY8GSGTNWn-bbR8mRaWupctCbKL95nA&usqp=CAU" alt="" />
              </div>
            </div>
            </div>
            <div className="price-range">
              <h3>Brief Description of Price Range</h3>
              {post.cat==="salon" && <ul>
                <li>Waxing Price Range: {post.price1}</li>
                <li>Facial Price Range: {post.price2}</li>
                <li>Haircut Price Range: {post.price3}</li>
              </ul>}
              {post.cat==="house builder" && <ul>
                <li>price range for 2 story building: {post.price1}</li>
                <li>price range for 3 story building: {post.price2}</li>
                <li>price range for 100 acres of land: {post.price3}</li>
              </ul>}
              {post.cat==="tailor" && <ul>
                <li>Price Range for Kurti: {post.price1}</li>
                <li>Price Range for Suits: {post.price2}</li>
                <li>Price Range for Frocks: {post.price3}</li>
              </ul>}
              {post.cat==="dry cleaner" && <ul>
                <li>Price Range for Dry Cleaning: {post.price1}</li>
                <li>Price Range for Charak: {post.price2}</li>
                <li>Price Range for Ironing: {post.price3}</li>
              </ul>}
              {post.cat==="wall painter" && <ul>
                <li>Price according to per day of work: {post.price1}</li>
                
              </ul>}
              
            </div>

            <div className="contact-details">
              <h3>Contact Details</h3>
             <div className="address">
              <h6>Address: </h6>
              <p>{post.address},{post.locality},{post.city},{post.city!==post.state && post.state},{post.pin},{post.country}</p>
              </div> 
              <div className="num">
                <h6>Contact Number:</h6>
                <p>{post.contact}</p>
              </div>
            </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default Portfolio