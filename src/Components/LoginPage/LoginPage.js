import React from 'react';
import './LoginPage.css';

function LoginPage(){

      return(
          <div className='loginPage'>
                <div className='roles' name='role'>
                        <button className='role alumnis' value={"Alumni"}>Alumni</button>
                        <button className='role teacher' value={"Teacher"}>Teacher</button>
                        <button className='role student' value={"Student"}>Student</button>
                        <button className='role admin' value={"Admin"}>Admin</button>
                </div>

                <div className='form-login'>
                   
                     <input type='email' className='eml' placeholder='email' required />
                     <input type='password' className='pass' placeholder='password' required />
                      <button className='btns'>Submit</button>
           
                </div>
          </div>
      )
}

export default LoginPage;