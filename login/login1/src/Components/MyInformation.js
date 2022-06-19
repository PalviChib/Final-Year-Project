import React from 'react'

import { useState } from 'react'
import loginService from '../service/login-service';

function MyInformation() {

     const [myInformation , setMyInformation]= useState({

  "userId": "",
  "userName": " ",
  "password": " ",
  "mobileNumber": " ",
  "email": "",
 
     });
     const[userId,setId]= useState("");
     

    //  useEffect(()=>
    //  {
    //      loginService.get(userId);
    //  },[]);


     const changeHandler = (event) => {
        setId(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();// prevents page reload
        loginService.get(userId)
        .then((response)=>{setMyInformation(response.data);console.log(response.data)})
        .catch((error)=>{console.log(error)})

    }


  return (
    myInformation.userId !==undefined &&
    <div>
        <div class="myinformation">

            <form onSubmit={submitHandler} >
                Enter Your Unique UserId:<br></br>
                <input type="text" value={userId} onChange={changeHandler} required></input>
               <div> <input type="submit" value="Submit" className="btn btn-info"></input></div>
            </form>
            </div>

          

       <table className="table table-hover">
           <thead>
               <tr>
                  
                       <th>User Name</th>
                       <th>Marks In Subject 1 </th>
                       <th>Email</th>
                      
                    
                   
               </tr>
           </thead>

           <tbody>
               <tr>
                   <td>
                       {myInformation.userName}
                   </td>

                   <td>
                       {myInformation.mobileNumber}
                   </td>

                   <td>
                       {myInformation.email}
                   </td>
               </tr>
           </tbody>
       </table>





    </div>
  )
}

export default MyInformation