import React from 'react'
import {Routes ,Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar.jsx';
import Footer from './Footer';

const App=()=>{
return(
  <>
  <Navbar/>
  <Routes>
        <Route  exact path='/' element={<Home/>}/>
        <Route path='/index.html' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
   </Routes>
   <Footer/>
  </>
 
)
}

export default App;
