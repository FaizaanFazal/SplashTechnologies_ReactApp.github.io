import React from 'react';
import { NavLink } from 'react-router-dom';


const Common=(props)=>{
return(
  <>
 <section id='header' className='d-flex align-items-center '>
  <div className="container-fluid nav_bg ">
            <div className="row">
                <div className="ccol-10 mcx-auto ">
                <div className="row">
                    <div className='col-md-6  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h2>{props.name} <strong className='nbrand'>SPLASH-TECHNOLOGIES</strong> </h2>
                        <h4 className='my-3'>
                          We are the team of talented developer making websites
                        </h4>
                        <div className='mt-3'>
                          <NavLink to={props.visit} className="btn rounded-pill btn-outline-primary">{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className='col-lg-6 order-1 order-lg-2 header-img'>
                      <div className='img-round'>
                      <img src={props.imgsrc} alt="Image" className={props.animationname} />
                      </div>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
 </section>
  </>
)
}

export default Common;
