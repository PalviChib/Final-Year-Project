import React from 'react'
import loginService from '../service/login-service';
import {useState} from "react";
import { FiUserPlus } from "react-icons/fi";
import { BsKey } from "react-icons/bs";
// import { FcPhone } from "react-icons/fc";
import { VscVerified } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";
function Login() {
  const[myAccount , setMyAccount]=useState(
    {
       "userId": "",
      "userName": "",
      "password": "",
      "mobileNumber": "",
      "email": "",
      "customer": {
        "customerId": ""
    }
   }
  );
  const changeHandle = (e)=>{
    setMyAccount((oldAccount)=>({...oldAccount,[e.target.name]: e.target.value,
      customer: {
        ...oldAccount.customer.customerId,
        ...{ [e.target.name]: e.target.value }
      }
    }));  
};

// const changeHandle2 = (e)=>{
//   setMyAccount((oldAccount)=>({...oldAccount,[e.target.name]: e.target.value
//   ,  customer: {
//     ...oldAccount.customer.customerId,
//     ...{ [e.target.name]: e.target.value }
//   }
// }));
// };
const submitHandler = (e)=>{
  e.preventDefault();
  console.log(myAccount);
  loginService.create(myAccount)
  .then((r)=>{console.log(r.data)})
  .catch((e)=>{console.log(e.response.data)})
};
console.log(myAccount.userId);
  return (
    <div className='form'>
         <div  class="login">Add More Information</div><br></br><br></br>
        <form onSubmit={submitHandler} >
        <div class="form-outline mb-4">
        <div class ="UserName">User Name <FiUserPlus/></div>
        <input type="text"  name="userName"  value={myAccount.userName} onChange={changeHandle}  class="form-control form-control-lg" placeholder="User Name" required/><br/>
        </div>
        <div class="form-outline mb-4">
        <div class ="UserName">Password <BsKey></BsKey></div>
        <input type="password" name= "password" value={myAccount.password} onChange={changeHandle} class="form-control form-control-lg" placeholder="Password" required/><br/>
        </div>
        <div class="form-outline mb-4">
        {/* <FcPhone/> */}
        <div class ="UserName">Marks </div>
        <input type="number" name= "mobileNumber" value={myAccount.mobileNumber} onChange={changeHandle} class="form-control form-control-lg" placeholder="Marks"required/><br/>
        </div>
        <div class="form-outline mb-4">
        <div class ="UserName">Email <MdMailOutline></MdMailOutline></div>
        <input type="email" name="email" value={myAccount.email}  onChange={changeHandle} class="form-control form-control-lg" placeholder="Email"required/><br/>
        </div>
        <div class="form-outline mb-4">
        <div class ="UserName">Registered Id<VscVerified></VscVerified><br/></div>
        <input type="number" name="customerId" value={myAccount.customerId}  onChange={changeHandle} class="form-control form-control-lg" placeholder="Registered Id"required/><br/>
        </div>
        <input type="submit" value="Add" id="loginbutton" className="btn btn-info"/>
        </form>
    </div>
  )
}
export default Login