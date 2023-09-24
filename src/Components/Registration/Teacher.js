import React,{useEffect} from 'react';
import './AlumniPage.css';
import Photo from './Photo';
import { useNavigate } from 'react-router-dom';

function TeacherPage(){

       const nav = useNavigate();

       useEffect(()=>{
            handleYears();
       })

       function handleYears(){
           const select = document.getElementById("Year");
           for(let i = 22 ; i < 24 ; i++){
                const option = document.createElement("option");
                option.value = 2000+i;
                option.innerHTML = 2000+i;
                select.appendChild(option);
           }
       }




       return(
           <div className='alumni-page'>
             
                <div class="container">
                <header>Teacher Registration</header>

                <form action="" method="POST" enctype="multipart/form-data">

                        <div class="details personal">
                            <div className='extra'>
                          <i className='fa fa-arrow-left' onClick={()=> nav('/login')}></i>
                            <span class="title">Login Here</span>
                            </div>

                            <div className='blocks'>
                           
                             <Photo/>      
                            <div class="fields">
                                <div class="input-field">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter first name" required/>
                                </div>
                                <div class="input-field">
                                    <label>Middle Name</label>
                                    <input type="text" placeholder="Enter middle name"  />
                                </div>

                        <div class="input-field">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter last name" required/>
                        </div>

                        <div class="input-field">
                            <label>Email</label>
                            <input type="text" placeholder="Enter your email" required/>
                        </div>
                        

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="number" placeholder="Enter mobile number" />
                        </div>

                        <div class="input-field">
                        <div class="form-group">
                            <label for="passingyear">Year of joining:</label>
                            <select name="Year" id="Year">
                            </select>
                             
                        </div>
                        </div>
                        <div class="input-field">
                            <label>Course Name</label>
                            <select name="Course" id="Course">
                            <option value="M.SC(Mathematics)">M.Sc Mathematics</option>
                            <option value="M.SC(IMCA)">M.SC industrial Mathematics With Computer Application</option>
                            <option value="Ph.D">Ph.D</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>PRN Number</label>
                            <input type="number" placeholder="Enter your PRN Number" />
                        </div>

                    
                        <div class="input-field">
                            <label>Linked IN Profile</label>
                            <input type="text" placeholder="Enter your Linked IN profile" required/>
                        </div>
                    
                        <div class="input-field">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        
                        <button type="submit">Submit</button>
                    
                        <div class="input-field">
                            <label for="confirmpassword">Confirm Password:</label>
                            <input type="password" id="confirmpassword" name="confirmpassword" required/>
                        </div>
                    </div>
                    </div>
                </div>
              
                </form>
           </div>
        
        </div>
        
    
       )
}
export default TeacherPage;