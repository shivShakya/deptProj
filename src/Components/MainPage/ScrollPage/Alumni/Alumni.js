import React from 'react';
import './Alumni.css';
import Form from './Form';
function Alumni(){
       return(
           <div className='almuni-main'>
                     <div className='alm-info'> 
                         <div className='alm-tag'>Alumni Page</div>
                            <div className='al-content'>
                                   Our alumni are a testament to the power of education
                                   and determination. Their success stories continue to 
                                   inspire current and future generations of mathematicians.
                            </div>
                     </div>    
                 <div className='hod-message'>
                     <div className='hod-text'>
                        Dear Esteemed Alumni, Your remarkable 
                       achievements are a testament to the excellence of our mathematics
                      department. We're excited to create a bridge between your success 
                      and the aspirations of our current students. To make this connection
                      even stronger, we kindly ask you to spare a moment to complete this 
                      form. Your valuable data will serve as a wellspring of
                      motivation for our budding mathematicians. Your support and involvement
                     are deeply appreciated, and we believe your experiences will leave an 
                     indelible mark on our department's legacy<hr/>With warm regards, <hr/>Vinayak 
                     Joshi <hr/> Head of the Department of Mathematics
                    </div>
                </div>

                     <Form/>
        </div> 
       
       )
}

export default Alumni;