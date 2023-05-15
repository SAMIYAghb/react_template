import React from 'react'
import about from './../../imag/about.jpg'

import style from './About.module.css'





export default function About() {
  return (
    <>
    <div className="about">
      
              <div className="layer"></div>
              <img className="image" src={about} alt="" /> 
      
            
 
      <div className="container">
          <div className="heading">
            <p>About Us</p>
            <h1>About Us - Who We Are?</h1>
          </div>
          <section>
            <div className="row my-5">
              <div className="col-md-6 ">
                <h2>Our Agency Story</h2>
                <h5>Check out our company story and work process</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ea repellat beatae doloremque itaque vel minus? Deleniti nisi, sunt in quidem odio necessitatibus provident quia cum voluptatibus ea perspiciatis ut sequi sed. Est doloribus aliquid officia, officiis nesciunt tenetur quaerat optio atque vel culpa, soluta esse neque dolorum unde minus!</p>
                <button className={style.btn}>More About Us</button>
              </div>
              <div className="col-md-6">
                <img className='w-100 img-fluid' src="./immio.jpg" alt="" />
              </div>
            </div>
          </section>
      </div>
    </div>
  
    </>
  )
    
}
