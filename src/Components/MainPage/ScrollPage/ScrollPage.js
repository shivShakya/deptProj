import React,{useState, useEffect} from 'react';
import './ScrollPage.css';
import Hod from './HOD/Hod';
import Alumni from './Alumni/Alumni';
import Admission from './Admission/Admission';
import Event from './Events/Event';

import { useNavigate } from 'react-router-dom';
import Campus from './Campus/Campus';

function ScrollPage(){  

     const [scrollToDiv, setScrollToDiv] = useState(null);
     const nav = useNavigate();

     useEffect(()=>{
             if(scrollToDiv){
               const yOffSet = scrollToDiv.offsetTop;
               const duration = 800; 
         
               const startTime = performance.now();
               const endTime = startTime + duration;
               console.log(endTime);
         
               function scrollStep(timestamp) {
                 const currentTime = Math.min(timestamp, endTime);
                 const progress = (currentTime - startTime) / duration;
                 window.scrollTo(0, yOffSet * progress);
         
                 if (currentTime < endTime) {
                   requestAnimationFrame(scrollStep);
                 }
               }
         
               requestAnimationFrame(scrollStep);
             }
             setScrollToDiv(null);
     },[scrollToDiv]);

       return(
           <div className='scrl-page'>
                 <div id='front'></div>
                 <div className='back-ground'>


                      <div className='logIn-btn'>
                 
                         <img src='  https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png' width='100px' height='100px' alt='logo'/>
                        <div className='head-name'> SavitriBai Phule Pune University</div>
                        <button id='login' onClick={()=> nav('/login')}>Login/SignUp</button>
                     </div>

                       <div className='back-img'><div className="Maths">Department Of Mathematics</div></div>
                  <div className='tab-box'>
                      <div className='nav-tabs'>
                           <div className='tabs ad' onClick={() => setScrollToDiv(document.getElementById('adm'))}></div>
                           <div className='tabs camp' onClick={() => setScrollToDiv(document.getElementById('camp'))}></div>
                           <div className='tabs eve' onClick={() => setScrollToDiv(document.getElementById('eve'))}></div>
                          <div className='tabs alm'  onClick={() => setScrollToDiv(document.getElementById('alm'))}></div>
                     </div>
                   </div>  

                  <div className='pages'>
                         <Hod/>
                        <div id='adm'> <Admission/></div>
                        <div  id='camp'><Campus/></div>
                        <div className='events' id='eve'> <Event/></div>
                      <div className='alumni' id='alm'><Alumni/></div>
                      <div className='foot'></div>
                  </div>
                 
                 </div>
                 <div id="end-btn" ><div id="end-scroll"  onClick={() => setScrollToDiv(document.getElementById('front'))} ></div></div>     
        </div>
       )
}
export default ScrollPage;