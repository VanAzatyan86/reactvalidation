

import './App.scss';
import { useState } from 'react';
import Search from './Search';
import Products from './Products';

 
function App() {
  const[email,setEmail]=useState("")
  const[login,setLogin]=useState("")
  const[password,setPassword]=useState("")
  const[loginDirty,setLoginDerty]=useState(false)
  const[errorlogin,setErrorLogin]=useState("incorrect login")
  const[passwordDirty,setPasswordDerty]=useState(false)
  const[errorPassword,setErrorPassword]=useState("incorrect password")
  const[value,setValue]=useState('')
 
const changelogin=(e)=>{
switch (e.target.name){
  case"login":
  setLoginDerty(true)
  break
  case 'password':
    setPasswordDerty(true)
    break

}
}

const handlChangePassword=(e)=>{
  setPassword(e.target.value)
  if(e.target.value.length<6){
    setErrorPassword("incorrect password")
  }else{
    setErrorPassword("")
  }
}
const handleChangeLogin=(e)=>{
  setLogin(e.target.value)
  if(e.target.value.length<8){
    setErrorLogin("your login incorrect")
  }else{
    setErrorLogin("")
  }
}

 const handelClick =()=>{
 if(login.length>6 && password.length>8 ){
 localStorage.setItem("obj",JSON.stringify({
  login: login,
  email:email,
  password: password
 }))

 }
 setEmail("")
 setLogin("")
 setPassword("") 
 }
  
 const handlClick=(e)=>{
  setValue(e.target.value)
}
  return (
   <div>

   
   <div>
     <form action="" className='formInput'>
      {(loginDirty && errorlogin) && <div style={{color:"red"}}>{errorlogin}</div> }
       <input  name="login"  
       placeholder='enter your login' 
       onBlur={(e)=>changelogin(e)} 
       onChange={e=>handleChangeLogin(e)} />

       {(passwordDirty && errorPassword) && <div style={{oolor:"red"}}>{errorPassword}</div>  }
       <input name="password" 
       type="password" 
       placeholder='password'  
       onBlur={(e)=>changelogin(e)} 
       onChange={e=>handlChangePassword(e)}/>

       <input 
        name='email' 
        type="email"  
        placeholder='email' />

       <button type="submit" onClick={handelClick}>send value</button>
    </form>
   </div>
     <div>
      <Search handlClick={handlClick}/>
        </div>
         
    <div>
    
      <Products value={value} setValue={setValue}/>
     </div>
   </div>
   
  );
  }

export default App;
