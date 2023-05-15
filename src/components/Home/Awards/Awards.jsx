import React from 'react';
import { awards } from "../../data/Data"
import style from './Awards.module.css'



export default function Awards() {
  return (
    <>
    <div className={style.awards}>
        <div className="container">
            <p>Our Awards</p>
            <h4 className='mb-5'>Over 1.24.000+ Happy User Bieng With Us Stil They Love Our Services</h4>
           
            <div className="row">
                {awards.map((val, index) => (
                  <div className='col-md-6 col-lg-3' key={index}>
                    <div className='icon my-3'>
                      <span>{val.icon}</span>
                    </div>
                      <h1>{val.num}</h1>
                      <p>{val.name}</p>
                  </div>
                ))}
            </div>
          
        </div>
    </div>
    </>
  )
}

