import React from 'react'
import {NavLink} from 'react-router-dom'

const Cards=(props)=>{
return(
  <>
     <div className='col-lg-4 col-md-6 col-10 mx-auto'>
                <div class="card">
                  <img src={props.imgsrc} class="card-img-top" alt="image"/>
                  <div class="card-body">
                  <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <span class="btn btn-primary"><NavLink to="" class="btn btn-primary">Go somewhere</NavLink></span>
                 </div>
                </div>
              </div>
  </>
)
}

export default Cards;
