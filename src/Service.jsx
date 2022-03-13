import React from 'react'
import Cards from './Cards';
import Sdata from './Sdata';

const Service=()=>{
return( 
  <>
    <div className='my-5'>
      <h1 className='text-center'>Our Services</h1>
    </div>
    <div className="container-fluid mb-5">
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              
                {
                  Sdata.map((val,index)=>{
                    return<Cards
                    key={val.index}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    />
                  }
                  )
                }
               
            </div>
          </div>
        </div>

    </div>
  </>
)
}

export default Service;
