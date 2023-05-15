import React from 'react'
import FeatureCards from './../../Home/Feature/FeatureCards';

import service from './../../imag/services.jpg'

export default function Services() {
  return (
    <>
      <div className="services"> 
              <div className="layer"></div>
              <img className="image" src={service} alt="" /> 
              <div className="container">
                    <div className="heading">
                      <p>Services</p>
                       <h2 className=''>Services -All Services</h2>        
                    </div>
                    <FeatureCards/>
              </div>
      </div>
        
    </>
  )
}
