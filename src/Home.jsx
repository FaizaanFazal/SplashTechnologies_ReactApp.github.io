import React from 'react';
import web from "../src/images/water.png"
import Common from './Common';

const Home=()=>{
return(
  <>
 <Common name="Grow your bussiness with"
 imgsrc={web} 
 visit='/service' 
 btname="Contact Now"
 animationname='animated img-fluid'/>
  </>
)
}

export default Home;
