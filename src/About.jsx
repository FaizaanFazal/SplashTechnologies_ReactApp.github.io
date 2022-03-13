import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common'
import web from "../src/images/watercircle.png"

const About=()=>{
return(
  <>
 <Common name="Welcome To About Page" 
 imgsrc={web} 
 visit='/contact' 
 btname="Contact Now"
 animationname="Animcircle img-fluid" />
  </>
)
}

export default About;
