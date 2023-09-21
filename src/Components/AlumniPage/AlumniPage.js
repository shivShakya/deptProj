import React from 'react';
import './AlumniPage.css';

function AlumniPage(){
       return(
           <div className='alumni-page'>
                <div class="container">
                <header>Registration</header>

                <form action="submit.php" method="POST" enctype="multipart/form-data">
                        <div class="details personal">
                            <span class="title">Personal Details</span>

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
                            <label for="passingyear">Passing Year:</label>
                            <input type="number" placeholder="Enter Passing year" />
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
                            <label>current Company</label>
                            <input type="text" placeholder="Enter your company name" required/>
                        </div>

                        <div class="input-field">
                            <label>current Position</label>
                            <input type="text" placeholder="Enter your Current Position" required/>
                        </div>
                        <div class="input-field">
                            <label for="picture">Upload Picture:</label>
                            <input type="file" id="picture" name="picture" accept="image/*"/>
                        </div>
                        <div class="input-field">
                            <label>Linked IN Profile</label>
                            <input type="text" placeholder="Enter your Linked IN profile" required/>
                        </div>
                        <div class="input-field">
                            <label>Scetor Of Work</label>
                            <select name="Sectors" id="Sector">
                                <option value="IT">IT</option>
                                <option value="Geometry">Geometry</option>
                                <option value="Teaching">Teaching</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        
                    
                        <div class="input-field">
                            <label for="confirmpassword">Confirm Password:</label>
                            <input type="password" id="confirmpassword" name="confirmpassword" required/>
                        </div>
                    </div>
                </div>
                <button type="submit">Submit</button>
                </form>
           </div>
        </div>
        
    
       )
}
export default AlumniPage;