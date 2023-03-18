import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/useras.css'


const UserAs = () => {

    const navigate = useNavigate;

    
  return (
    <div classname="join">
        <div className="joinas">
            <h1 style={{textAlign:"center"}}>Join As</h1>
        </div>
        <Button style={{backgroundColor:"#008ECC",display:"inline-block",marginLeft:"400px",marginTop:"100px"}}><Link to="/entrepreneur">Entrepreneur</Link></Button>
        <Button style={{backgroundColor:"#008ECC",display:"inline-block",marginLeft:"300px",marginTop:"100px"}}><Link to="/customer">customer</Link></Button>
        
    </div>
  )
}

export default UserAs