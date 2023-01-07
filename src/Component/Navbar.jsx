import { Button } from '@mui/material'
import React,{useState,useContext} from 'react'
import {Avatar} from '@mui/material';
import { User } from '../App';
import {TextField} from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {SearchIcon} from '@mui/icons-material';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import classes from "./Navbar.module.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import tbc from "../Media/TBC.png"
import { Link } from 'react-router-dom';
import { pink } from '@mui/material/colors';
import { display } from '@mui/system';
function Navbar() {
const {LoggedInUserData, setLoggedInUserData,createUser}=useContext(User);
  console.log(LoggedInUserData)
  const [Style, setStyle] = useState("none");

  const Toggle=()=>{
    if(LoggedInUserData?.isAuthrized){
      
      setStyle("");
    }
    else{
      setStyle("none")
    }
  }
  const Logout=()=>{
      setLoggedInUserData(
        {id:"",firstName:"",lastName:"",email:"",Gender:"",isAuthrized:false,Liked:[],Cart:[],isbpn:[],isbpn_Cart:[]}
      ) 
  }





  return (
    <div className={classes.container}>
     <Link to="/" style={{color:"black",textDecoration:"none"}}><div className={classes.Logo} >
     <span className={classes.logo}><img src={tbc} height="110px" width="110px"/></span>

        <span className={classes.Name}> &nbsp;let get dressed</span>
     </div></Link>
     <div className={classes.items}>
     
     <span className={classes}><Link to={"/categories"} style={{textDecoration:"none", color:"black"}}><span>Mood</span></Link></span>
     <span className={classes.cart}><Link to={"/cart"} style={{textDecoration:"none", color:"black"}}></Link><span><AddShoppingCartIcon style={{position:"relative",top:"5px",fontSize:"2rem"}} /></span></span>

     <div className={classes.navItem}>
{
  !LoggedInUserData.isAuthrized && 

<Link to={"/signup"}><Button variant="contained" style={{backgroundColor:"#161619",padding:"12px",fontSize:"1rem"}}>Register</Button></Link>
}
{
  LoggedInUserData.isAuthrized && 
<div style={{positon:"relative"}}>
<Avatar
  onClick={Toggle}
  sx={{ bgcolor:pink[400] }}
  alt={LoggedInUserData.firstName}
  src="/broken-image.jpg"
></Avatar>
<div className={classes.impForm} style={{display:`${Style}`}}>
  <ul className={classes.line}>
    <li>hi, {LoggedInUserData.firstName}</li>
    <hr style={{width:"100%",margin:"auto"}}/>
    <li onClick={Logout} style={{cursor:"pointer"}}>Logout</li>
  </ul>
  </div>
</div>
}
</div>
    </div>
    </div>

  )
}

export default Navbar