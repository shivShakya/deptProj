import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import AlumniPage from './Components/AlumniPage/AlumniPage';
import MainPage from './Components/MainPage/MainPage';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  return (

    <div className="App">
          <div id='upr-bor'></div>
          <BrowserRouter>
                <Routes>
                       <Route path='/' element={<MainPage/>}/>
                       <Route path='/login' element={<LoginPage/>}/>
                       <Route path='/Alumni-page' element={<AlumniPage/>}/>
                </Routes>
         </BrowserRouter>
         <div className="footer"></div>  
    </div>
  );
}
export default App;
