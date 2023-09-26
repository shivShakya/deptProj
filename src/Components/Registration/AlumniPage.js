import React,{useEffect, useState} from 'react';
import Photo from './Photo';
import { useNavigate } from 'react-router-dom';
import { useImageContext } from './MyContext';
import './AlumniPage.css';

function AlumniPage(){
    const nav = useNavigate();
    const { imageBlob } = useImageContext();
    console.log({ 'image-blob': imageBlob });
    
    const initialState = {
      "PRN": null,
      "FirstName": "",
      "MiddleName": "",
      "LastName": "",
      "Email": "",
      "Phone": "",
      "PassingYear": "",
      "Course": "",
      "Company": "",
      "Position": "",
      "linkdin": "",
      "sector": "",
      "password": "",
      "confirmPassword": "",
      "image": "",
    };
    
    const [alumni, setAlumni] = useState(initialState);
    
    useEffect(() => {
      handleYears();
    }, []);

    function handleYears() {
      const select = document.getElementById("Year");
      for (let i = 0; i < 33; i++) {
        const option = document.createElement("option");
        option.value = 1990 + i;
        option.innerHTML = 1990 + i;
        select.appendChild(option);
      }
    }
    
    async function handleSubmit(e) {
      e.preventDefault();
      console.log("Form submitted", alumni);
    
      try {
        const response = await fetch('http://localhost:5000/postAlumni', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...alumni, image : imageBlob}),
        });
    
        const result = await response.json();
    
        if (!response.ok) {
          console.log({ message: "Response is not okay" });
          alert(result.error);
        } else {
          console.log({ result_m: result.error });
          alert(result.error);
           nav('/login');
         
        }

        setAlumni(initialState);
        clearForm();
    
      } catch (err) {
        console.error({ error: err, message: "Some error occurred" });
      }
    }


    function clearForm() {
      document.getElementById("myForm").reset();
  }


  const [showOverlay, setShowOverlay] = useState(false);
  const [genOTP , setGenOTP] = useState(null);
  const [userOTP , setUserOTP] = useState(null);

  const openOverlay = async() => {
    console.log("Handle Email is called");
    try{
         const response = await fetch("http://localhost:5000/emailVarification",{
              method : 'POST',
              headers : {
                 'Content-Type' : 'application/json'
              },
              body : JSON.stringify({ 'Email' :alumni.Email })
         });

         if(!response.ok){
                console.log("response is not okay");
         }
         const result = await response.json();
         console.log(result);
         setGenOTP(result.generatedOTP);
    }catch(err){
          console.log(err);
    }

    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const handleOTP = async() =>{
        try{

          const response = await fetch("http://localhost:5000/otpMatch",{
            method : 'POST',
            headers : {
               'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ 'userOTP' : userOTP , 'generatedOTP' : genOTP })
       });

       if(!response.ok){
              console.log("response is not okay");
       }
       const result = await response.json();
       console.log(result);
       setShowOverlay(false);
            
            
        }catch(err){
             console.log(err);
        }
  }



       return(
           <div className='alumni-page'>
             
                <div class="container">
                <div style={{display:'flex' , justifyContent : 'center'}}>
                <header>Alumni Registration</header>
                <div style={{width : '30%'}}></div>
                </div>

                <form onSubmit={handleSubmit} >

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
                                    <input type="text" placeholder="Enter first name" onChange={(e)=> setAlumni({...alumni ,FirstName: e.target.value})} required/>
                                </div>
                                <div class="input-field">
                                    <label>Middle Name</label>
                                    <input type="text" placeholder="Enter middle name" onChange={(e)=> setAlumni({...alumni ,MiddleName: e.target.value})}  />
                                </div>

                        <div class="input-field">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter last name" onChange={(e)=> setAlumni({...alumni ,LastName: e.target.value})} required/>
                        </div>

                        <div class="input-field">
                          <label>Email</label><i className='fa fa-close' onClick={openOverlay}></i>
                       <input type="email" placeholder="Enter your email" onChange={(e)=> setAlumni({...alumni ,Email: e.target.value})} required/>
                        </div>

                        {showOverlay && (
        <div id="overlay" className="overlay">
          <div className="modal">
            <span className="close-icon" onClick={closeOverlay}>×</span>
                <input type='number' onChange={(e)=> setUserOTP(e.target.value)} /> <button onClick={handleOTP}>Submit</button> <button>Resend otp</button>
            <p>This is your overlay content.</p>
          </div>
        </div>
      )}
                        

                        <div class="input-field">
                            <label>Mobile Number</label>
                            <input type="text" placeholder="Enter mobile number" onChange={(e)=> setAlumni({...alumni ,Phone: e.target.value})} />
                        </div>

                        <div class="input-field">
                        <div class="form-group">
                            <label for="passingyear">Passing Year:</label>
                            <select name="Year" id="Year" onChange={(e)=> setAlumni({...alumni ,PassingYear: e.target.value})}>
                            </select>
                             
                        </div>
                        </div>
                        <div class="input-field">
                            <label>Course Name</label>
                            <select name="Course" id="Course" onChange={(e)=> setAlumni({...alumni ,Course: e.target.value})}>
                            <option value="M.SC(Mathematics)">M.Sc Mathematics</option>
                            <option value="M.SC(IMCA)">M.SC industrial Mathematics With Computer Application</option>
                            <option value="Ph.D">Ph.D</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label>PRN Number</label>
                            <input type="number" placeholder="Enter your PRN Number" onChange={(e)=> setAlumni({...alumni ,PRN: e.target.value})} />
                        </div>

                        <div class="input-field">
                            <label>current Company</label>
                            <input type="text" placeholder="Enter your company name" onChange={(e)=> setAlumni({...alumni ,Company: e.target.value})} required/>
                        </div>

                        <div class="input-field">
                            <label>current Position</label>
                            <input type="text" placeholder="Enter your Current Position" onChange={(e)=> setAlumni({...alumni ,Position: e.target.value})} required/>
                        </div>
                      
                        <div class="input-field">
                            <label>Linked IN Profile</label>
                            <input type="text" placeholder="Enter your Linked IN profile" onChange={(e)=> setAlumni({...alumni ,linkdin: e.target.value})} required/>
                        </div>
                        <div class="input-field">
                            <label>Scetor Of Work</label>
                            <select name="Sectors" id="Sector" onChange={(e)=> setAlumni({...alumni ,sector: e.target.value})}>
                                <option value="IT">IT</option>
                                <option value="Geometry">Geometry</option>
                                <option value="Teaching">Teaching</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div class="input-field">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" onChange={(e)=> setAlumni({...alumni ,password: e.target.value})} required/>
                        </div>
                        
                        <button type="submit">Submit</button>
                    
                        <div class="input-field">
                            <label for="confirmpassword">Confirm Password:</label>
                            <input type="password" id="confirmpassword" name="confirmpassword" onChange={(e)=> setAlumni({...alumni ,confirmPassword: e.target.value})} required/>
                        </div>
                    </div>
                    </div>
                </div>
              
                </form>
           </div>
        
        </div>
       )
}
export default AlumniPage;