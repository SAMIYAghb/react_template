import React from 'react'
import style from './Location.module.css';
import {location} from './../../data/Data'

export const Location = () => {
  return (
    <>
    <div className={style.location}>
        <div className="container">
            <div className="heading">
                <h2 className=''>Eplore By Location</h2>
                <p> sit amet consectetur adipisicing elit. Et, magnam.</p>
            </div>
            
            <div  className="row">
                {location.map((loc, index)=>(
                    <div key={index} className="col-md-6 col-lg-4 mt-3 text-center position-relative text-white">
                        <img src={loc.cover} className='w-100 img-fluid ' alt="" />
                        <div className={style.layer}>
                            <div className="">
                                <h5 className='mt-2'>{loc.name}</h5>
                                <span className=''>{loc.Villas} </span>
                                <span >{loc.Offices}</span>
                                <span >{loc.Apartments}</span>
                            </div>
                            
                        </div>
                       
                    </div>               
            ))}
             </div>
        </div>
    </div>
    </>
  )
}
