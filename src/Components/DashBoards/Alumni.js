import React,{useEffect, useState} from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function Alumni(){

    const nav = useNavigate();
    const [ userData , setUserData] = useState({
        'Email' : '',
        'PRN' : null,
        'FirstName' : '',
        'MiddleName' : '',
        'LastName' : '',
        'role' : '',
     });


    useEffect(()=>{
            UserDataLog();
    });

    function UserDataLog(){
        const token = localStorage.getItem('token');

        if(token){
               const decodeToken = jwtDecode(token);
               const { email, PRN, FirstName, MiddleName, LastName, role } = decodeToken;

               setUserData({
                  'Email' : email,
                  'PRN' : PRN,
                  'FirstName' : FirstName,
                  'MiddleName' : MiddleName,
                  'LastName' : LastName,
                  'role' : role
               });
        }

    }

    
    function HandleLogOut(){
         localStorage.clear();
         nav('/login');
    }

    return(
        <div className='alumni-page'>
             
        <div class="container">
       <div style={{display:'flex', justifyContent : 'center' , alignItems : 'center'}}>
            <header>Alumni Dashboard</header>
            <div style={{width: '75%'}}></div>
           <button onClick={HandleLogOut}>LogOut</button>
        </div>

        <form action="" method="POST" enctype="multipart/form-data">

                <div class="details personal">
                          <div className='card'>
                                  <div className='details-card'>
                                    {
                                       <div className='details-text'>
                                           <div>PRN_No :{userData.PRN}</div>
                                           <div>{ userData.FirstName} {userData.MiddleName} {userData.LastName}</div>
                                       </div>
                                  }

                                       <div className='dash-img'>
                                       </div>
                                  </div>
                          </div>
                </div>
      
        </form>
   </div>

</div>

    )
}

export default Alumni;