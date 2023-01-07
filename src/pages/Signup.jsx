import React,{useState,useContext} from 'react'
import TextField from '@mui/material/TextField';
import "./Signup.css"
import { Button } from '@mui/material';
import tbc from "../Media/TBC.png"
import { Alert } from 'reactstrap';
import{Select,MenuItem,InputLabel} from "@mui/material"
import { Link } from 'react-router-dom';
import {User} from "../App";
function Signup() {
const [Message, setMessage] = useState("")
const [rePassword, setrePassword] = useState("")
const {Creadential, setCreadential,createUser}=useContext(User);
const verifyData=(e)=>{
  e.preventDefault();
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if(Creadential.fname!==""){
    if(Creadential.lname!==""){
        if(regex.test(Creadential.email)){
          if(Creadential.Password!==""){
            if(rePassword!==""){
              if(Creadential.Password===rePassword){
                console.log(Creadential,"data to be pass on");
                console.log(Creadential,"data to be pass on");
                console.log(Creadential,"real state")
                createUser(Creadential.email,Creadential.Password);
              }
              else{
    setMessage("Password is not match")

              }
            }
            else{
    setMessage("Please fill re-Password")

            }
          }
          else{
    setMessage("Please fill Password ")

          }
      }
      else{
    setMessage("Please fill Valid email")
      }


    }
    else{
    setMessage("Please fill last name")

    }


  }
  else{
    setMessage("Please fill first name")
  }

}














  return (
    <form className='Register' onSubmit={verifyData}>
          <div  ><img className='Logo_register' src={tbc} height="60px" width="60px"/>
          </div>
          {Message.length != 0 && <Alert color="danger">
                        {Message}
                    </Alert>}
<div className='name'>
<TextField id="outlined-search" label="First Name" onChange={(e)=>{setCreadential({...Creadential,fname:e.target.value})}} type="text" />
<TextField id="outlined-search" label="Last Name" onChange={(e)=>{setCreadential({...Creadential,lname:e.target.value})}} type="text" />
</div>
<div>


<TextField id="outlined-search" fullWidth label="Email" type="email" onChange={(e)=>{setCreadential({...Creadential,email:e.target.value})}} />
</div>
    <div className='credential'>
    <TextField id="outlined-search" label="Password" type="password" onChange={(e)=>{setCreadential({...Creadential,Password:e.target.value})}} />
    <TextField  id="outlined-search" label="Re-enterd Password" type="password" onChange={(e)=>{setrePassword(e.target.value)}} />
    </div>
<div>
<Button variant="contained" type="submit" style={{backgroundColor:"#161619",padding:"12px",fontSize:"1.2rem"}}>Register</Button>
</div>
<div >
<Link  to={"/login"} >Already User Sign in</Link>
</div>
    
  </form>
  )
}

export default Signup