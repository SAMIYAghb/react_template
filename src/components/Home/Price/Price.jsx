import React from 'react';
import style from './Price.module.css'
import PriceCard from './PriceCard';

export default function Price() {
  return (
    <>
    <div className={style.price}>
        <div className="container">
            <div className="heading">
                    <h2 className=''>Select Your Package</h2>
                    <p>Assumenda Clit. Rerum, doloremque assumenda! Oremqu Laudantium La tadipisicing .</p>
            </div>
            <PriceCard/>
        </div>
    </div>
    </>
  )
}
