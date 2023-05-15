import React from 'react'
import PriceCard from '../../Home/Price/PriceCard'
import price from './../../imag/pricing.jpg'

export default function Pricing() {
  return (
    <>
    <div className='pricing'>
             <div className="layer"></div>
              <img className="image" src={price} alt="" /> 
      
        <div className="container">
            <div className="heading">
                    <p className=''>30 Days money back guarantee</p>
                    <h2>No Extra Frees. Friendly Support</h2>
            </div>
            <PriceCard/>
        </div>
    </div>
    </>
  )
}
