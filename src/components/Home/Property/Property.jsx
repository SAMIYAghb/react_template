import React from 'react';
import style from './Property.module.css'
import PropertyCards from './PropertyCards';



export default function Property() {
  return (
    <>
    <div className={style.property}>
        <div className="container">
            <div className="heading">
                <h2 className=''>Recent Property Lised</h2>
                <p>Consectetur adipisicing sit amet consectetur adipisicing elit.</p>
            </div>

               <PropertyCards/> 

        </div>
    </div>
    </>
  )
}
